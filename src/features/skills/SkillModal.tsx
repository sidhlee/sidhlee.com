import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { animated, useTransition } from "react-spring"
import { FaTimes } from "react-icons/fa"
import Backdrop from "../../components/Backdrop"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"

const StyledSkillModal = styled(animated.article)<{ $isOpen: boolean }>`
  width: 95%;
  max-width: 50ch;
  position: fixed;
  z-index: var(--z-modal);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 5px;
  background: var(--cl-projects);

  .close-btn {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    background: black;
    color: var(--cl-off-white);
    display: flex;
    padding: 0.25rem;
    svg {
      transition: transform 200ms ease;
    }
    &:hover {
      svg {
        transform: scale(1.1);
      }
    }
  }
  .modal-inner {
    padding: var(--px);
    /* max-height: calc(90vh - 2 * var(--px)); */
    max-height: 90vh;
    overflow-y: auto;
    // hide vertical scrollbar
    scrollbar-width: none; /* Firefox ? */
    -ms-overflow-style: none; /* IE, Edge */
    @media (min-width: 600px) {
      scrollbar-width: initial; /* Firefox ? */
      -ms-overflow-style: initial; /* IE, Edge */
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-right: 1em;
    }
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
    .skill-description {
      margin-bottom: 2rem;
      ul {
        list-style: initial;
        padding-left: 1em;
        li {
          margin-bottom: 0.5em;
        }
      }
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
              <div className="modal-inner">
                <header>
                  <GatsbyImage
                    className="icon-img"
                    image={skillLogoImage as any}
                    alt={title}
                  />

                  <h3>{title}</h3>
                </header>
                <div className="modal-body">
                  <div
                    className="skill-description"
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                  ></div>
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
              </div>
            </StyledSkillModal>
          )
      )}
      <Backdrop isOpen={isOpen} close={close} />
    </>
  )
}

export default SkillModal
