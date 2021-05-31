import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const StyledProjectImages = styled("div")``

type ProjectImagesProps = {
  title: string
  mobileImageUrl: string
  desktopImageUrl: string
}

const ProjectImages: React.FC<ProjectImagesProps> = ({
  title,
  mobileImageUrl,
  desktopImageUrl,
}) => {
  return (
    <StyledProjectImages>
      <div className="project-image">
        <StaticImage
          className="mobile"
          src={mobileImageUrl}
          alt={`${title} mobile view`}
        />
        <StaticImage
          className="desktop"
          src={desktopImageUrl}
          alt={`${title} desktop view`}
        />
      </div>
    </StyledProjectImages>
  )
}

export default ProjectImages
