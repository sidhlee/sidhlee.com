import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { animated, useTransition } from "react-spring"
import { FaTimes } from "react-icons/fa"
import Backdrop from "./Backdrop"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"

const StyledSkillModal = styled(animated.article)<{ $isOpen: boolean }>`
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: scroll;

  position: fixed;
  z-index: var(--z-modal);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: var(--px);
  border-radius: 5px;

  background: var(--cl-projects);

  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-right: 1em;
    }
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  header,
  p,
  ul:not(:last-child) {
    margin-bottom: 1rem;
  }

  header {
    display: flex;
    align-items: flex-end;
    .icon-img {
      width: 60px;
      margin-right: 0.5rem;
    }
  }

  .modal-body {
    p {
      margin-bottom: 2rem;
    }
  }

  .related-skills {
    margin-top: 0.5rem;
    li {
      margin: 0.25em;
      font-size: 0.95rem;
      button {
        padding: 0.25em 0.5em;
        border-radius: var(--border-radius);
        background-color: var(--cl-about);
      }
      &.available button {
        background-color: var(--cl-main-light);
      }
    }
  }

  .tags {
    opacity: 0.6;
  }
`

type SkillModalProps = {
  title: string
  excerpt: string
  relatedSkills: string[]
  tags: string[]
  icon: FileNode
  isOpen: boolean
  availableSkills: string[]
  close: () => void
  selectCurrentSkill: (skill: string) => void
}

const SkillModal: React.FC<SkillModalProps> = ({
  title,
  icon,
  excerpt,
  relatedSkills,
  tags,
  isOpen,
  availableSkills,
  close,
  selectCurrentSkill,
}) => {
  const transitions = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: "translate(-80%, -50%)",
    },
    enter: {
      opacity: 1,
      transform: "translate(-50%, -50%)",
    },
    leave: {
      opacity: 0,
      transform: "translate(-20%, -50%)",
      config: {
        tension: 200,
      },
    },
    expires: 300,
  })

  const skillLogoImage = getImage(icon)

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <StyledSkillModal style={styles} $isOpen={isOpen}>
              <button className="close-btn" onClick={close}>
                <FaTimes role="img" aria-label="close" />
              </button>
              <header>
                <GatsbyImage
                  className="icon-img"
                  image={skillLogoImage as any}
                  alt={title}
                />

                <h3>{title}</h3>
              </header>
              <div className="modal-body">
                <p>{excerpt}</p>
                <h4>Related Skills</h4>
                <ul className="related-skills">
                  {relatedSkills.map(skill => {
                    const isSkillAvailable = availableSkills.includes(skill)
                    return (
                      <li
                        key={skill}
                        className={isSkillAvailable ? "available" : ""}
                      >
                        <button onClick={() => selectCurrentSkill(skill)}>
                          {skill}
                        </button>
                      </li>
                    )
                  })}
                </ul>
                <ul className="tags">
                  {tags.map(tag => (
                    <li key={tag}>#{tag}</li>
                  ))}
                </ul>
              </div>
            </StyledSkillModal>
          )
      )}
      <Backdrop isOpen={isOpen} close={close} />
    </>
  )
}

export default SkillModal
