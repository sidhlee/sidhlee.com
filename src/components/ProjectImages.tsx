import styled from "styled-components"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"

// TODO: crop png right up to the image border
const StyledProjectImages = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  .gatsby-image-wrapper {
    height: 100%;
  }

  .mobile {
    width: 25%;
    height: 80%;
    z-index: 50;
    margin-right: -20%;
  }
  .desktop {
    height: 100%;
    width: 100%;
    margin-bottom: 10%;
  }
`

type ProjectImagesProps = {
  title: string
  mobileImage: FileNode
  desktopImage: FileNode
}

const ProjectImages: React.FC<ProjectImagesProps> = ({
  title,
  mobileImage,
  desktopImage,
}) => {
  const desktopGatsbyImage = getImage(desktopImage) as IGatsbyImageData
  const mobileGatsbyImage = getImage(mobileImage) as IGatsbyImageData
  return (
    <StyledProjectImages className="ProjectImages">
      <div className="mobile">
        <GatsbyImage
          image={mobileGatsbyImage}
          alt={`${title} mobile view`}
          objectFit="contain"
          draggable="false"
        />
      </div>
      <div className="desktop">
        <GatsbyImage
          image={desktopGatsbyImage}
          alt={`${title} desktop view`}
          objectFit="contain"
          draggable="false"
        />
      </div>
    </StyledProjectImages>
  )
}

export default ProjectImages
