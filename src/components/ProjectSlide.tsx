import { useState } from "react"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"
import styled from "styled-components"
import { FaGithub } from "react-icons/fa"
import { animated, useSpring } from "react-spring"
import { ReactEventHandlers } from "react-use-gesture/dist/types"
import ButtonLink from "./ButtonLink"
import ProjectImages from "./ProjectImages"
import TechStacks from "./TechStacks"

const StyledProjectSlide = styled("article")`
  width: 100%;
  height: 100%;

  .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
  }

  /* left: 3%; */

  .project-header {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .logo {
      width: 50%;
      max-width: 220px;
      margin-right: 2rem;
    }

    .description-toggler {
      color: var(--text-main);
      padding: 0.25em 1.5em;
      background: rgba(0, 0, 0, 0.8);
      font-style: italic;
    }
  }

  .project-body {
    position: relative;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    cursor: grab;

    .description {
      position: absolute;
      z-index: 400;
      display: flex;
      justify-content: center;
      align-items: center;

      // overflow container to take full width
      width: 100vw;
      top: 1rem;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      padding: var(--px);

      margin-bottom: 1em;
      background: rgba(0, 0, 0, 0.88);

      p {
        max-width: 25rem;
      }
    }

    .mobile-image-container {
      position: relative;
      height: 100%;
      .ProjectImages {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .project-links {
    margin-left: -0.5rem;
    display: flex;
  }

  .desktop-image-container {
    width: 100%;
    display: none;
  }

  @media (min-width: 930px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    height: 100%;

    /*  Hide mobile-only elements & show desktop-only elements */
    .description-toggler,
    .mobile-image-container {
      display: none;
    }

    .col {
      width: 40ch;
      justify-content: center;
      align-items: flex-start;
      margin-right: 2rem;
      margin-left: var(--px-section-content);

      .project-body {
        height: auto;

        .description {
          position: relative;
          top: 0;
          width: 100%;
          height: auto;
          opacity: 1 !important; // override react-spring value
          padding: 0;
          background: transparent;
          p {
            max-width: 100%;
            transform: initial !important; // override react-spring value
          }
        }
      }
    }

    .desktop-image-container {
      width: 60%;
      display: block;
      position: relative;
    }
  }
`

type ProjectSlideProps = {
  project: Project
  bindDrag: (...args: any[]) => ReactEventHandlers
  style: any
}

export type Project = {
  title: string
  logoImage: FileNode
  technologies: string[]
  description: string
  desktopImage: FileNode
  mobileImage: FileNode
  liveUrl: string
  githubUrl: string
}

const ProjectSlide: React.FC<ProjectSlideProps> = ({ project, bindDrag }) => {
  const {
    title,
    logoImage,
    technologies,
    description,
    desktopImage,
    mobileImage,
    liveUrl,
    githubUrl,
  } = project

  const [descriptionHidden, setDescriptionHidden] = useState(true)

  const logoGatsbyImage = getImage(logoImage) as IGatsbyImageData

  const { x, y } = useSpring({
    x: descriptionHidden ? 1 : 0,
    y: descriptionHidden ? "20%" : "0%",
  })

  return (
    <StyledProjectSlide>
      <div className="col">
        <header className="project-header">
          {logoImage ? (
            <GatsbyImage
              className="logo"
              image={logoGatsbyImage}
              alt={title}
              objectFit="contain"
            />
          ) : (
            <h3>{title}</h3>
          )}
          <button
            className="description-toggler"
            onClick={() => setDescriptionHidden(v => !v)}
          >
            {descriptionHidden ? "about" : "close"}
          </button>
        </header>

        <div className="project-body" {...bindDrag()}>
          <TechStacks technologies={technologies} />
          <animated.div
            className="description"
            style={{
              opacity: x.to(x => 1 - x),
            }}
            onClick={() => setDescriptionHidden(true)}
          >
            <animated.p style={{ y }}>{description}</animated.p>
          </animated.div>
          <div className="mobile-image-container">
            <ProjectImages
              title={title}
              mobileImage={mobileImage}
              desktopImage={desktopImage}
            />
          </div>
        </div>

        <div className="project-links">
          <ButtonLink href={liveUrl} $theme="main">
            View Live
          </ButtonLink>
          <ButtonLink href={githubUrl} $theme="skills">
            <FaGithub />
            <span>GitHub</span>
          </ButtonLink>
        </div>
      </div>

      <div className="desktop-image-container">
        <ProjectImages
          title={title}
          mobileImage={mobileImage}
          desktopImage={desktopImage}
        />
      </div>
    </StyledProjectSlide>
  )
}

export default ProjectSlide
