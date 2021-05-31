import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ButtonLink from "./ButtonLink"
import { FaGithub } from "react-icons/fa"
import ProjectSkills from "./ProjectSkills"
import ProjectImages from "./ProjectImages"

const StyledProjectSlide = styled("div")`
  width: 100%;
`

type ProjectSlideProps = {
  project: Project
}

export type Project = {
  title: string
  logoUrl: string
  skills: string[]
  description: string
  desktopImageUrl: string
  mobileImageUrl: string
  liveUrl: string
  githubUrl: string
}

const ProjectSlide: React.FC<ProjectSlideProps> = ({ project }) => {
  const {
    title,
    logoUrl,
    skills,
    description,
    desktopImageUrl,
    mobileImageUrl,
    liveUrl,
    githubUrl,
  } = project
  return (
    <StyledProjectSlide>
      <div className="project-content">
        {/* <GatsbyImage className="logo" src={logoUrl} alt={title} /> */}
        <ProjectSkills skills={skills} />
        <p className="description">{description}</p>
        <div className="buttons">
          <ButtonLink href={liveUrl}>View Live</ButtonLink>
          <ButtonLink href={githubUrl} outline>
            <FaGithub />
            <span>GitHub</span>
          </ButtonLink>
        </div>
      </div>
      <ProjectImages
        title={title}
        mobileImageUrl={mobileImageUrl}
        desktopImageUrl={desktopImageUrl}
      />
    </StyledProjectSlide>
  )
}

export default ProjectSlide
