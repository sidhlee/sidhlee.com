import styled from "styled-components"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import ButtonLink from "./ButtonLink"
import { FaGithub } from "react-icons/fa"
import ProjectImages from "./ProjectImages"
import TechStacks from "./TechStacks"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"

const StyledProjectSlide = styled("div")`
  width: 100%;
  display: flex;
  position: relative;
  left: 3%;
  .project-content {
    width: 30%;
  }
  .logo {
    /* max-height: 3rem; */
    width: 50%;
    text-align: left;
  }
  .description {
    margin-bottom: 1em;
  }
  .buttons {
    margin-left: -0.5rem;
  }
`

type ProjectSlideProps = {
  project: Project
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

  const logoGatsbyImage = getImage(logoImage) as IGatsbyImageData

  return (
    <StyledProjectSlide>
      <div className="project-content">
        <GatsbyImage
          className="logo"
          image={logoGatsbyImage}
          alt={title}
          objectFit="contain"
        />
        <TechStacks technologies={technologies} />
        <p className="description">{description}</p>
        <div className="buttons">
          <ButtonLink href={liveUrl}>View Live</ButtonLink>
          <ButtonLink href={githubUrl} $outline>
            <FaGithub />
            <span>GitHub</span>
          </ButtonLink>
        </div>
      </div>
      <ProjectImages
        title={title}
        mobileImage={mobileImage}
        desktopImage={desktopImage}
      />
    </StyledProjectSlide>
  )
}

export default ProjectSlide
