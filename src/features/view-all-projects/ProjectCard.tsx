import styled from "styled-components"
import { ImageSharp, Maybe } from "../../graphqlTypes"

const StyledProjectCard = styled("article")``

type ProjectCardProps = {
  title?: string
  excerpt?: string
  desktopImage?: string
  technologies?: string[]
  githubUrl?: string
  liveUrl?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  excerpt,
  desktopImage,
  technologies,
  liveUrl,
  githubUrl,
}) => {
  return (
    <StyledProjectCard>
      <h2>{title}</h2>
    </StyledProjectCard>
  )
}

export default ProjectCard
