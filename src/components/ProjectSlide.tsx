import styled from "styled-components"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import ButtonLink from "./ButtonLink"
import { FaGithub } from "react-icons/fa"
import ProjectImages from "./ProjectImages"
import TechStacks from "./TechStacks"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"
import { useState } from "react"
import { animated, useSpring } from "react-spring"

const StyledProjectSlide = styled("article")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

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

    button {
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
`

type ProjectSlideProps = {
  project: Project
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

const ProjectSlide: React.FC<ProjectSlideProps> = ({ project }) => {
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

  const [imageShown, setImageShown] = useState(true)

  const logoGatsbyImage = getImage(logoImage) as IGatsbyImageData

  const { x, y } = useSpring({
    x: imageShown ? 1 : 0,
    y: imageShown ? "20%" : "0%",
  })

  return (
    <StyledProjectSlide>
      <header className="project-header">
        <GatsbyImage
          className="logo"
          image={logoGatsbyImage}
          alt={title}
          objectFit="contain"
        />
        <button onClick={() => setImageShown(v => !v)}>
          {imageShown ? "about" : "close"}
        </button>
      </header>

      <div className="project-body">
        <TechStacks technologies={technologies} />
        <animated.div
          className="description"
          style={{
            opacity: x.to(x => 1 - x),
          }}
          onClick={() => setImageShown(true)}
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
    </StyledProjectSlide>
  )
}

export default ProjectSlide
