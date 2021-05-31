import styled from "styled-components"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"

// TODO: crop png right up to the image border
const StyledProjectImages = styled("div")`
  position: relative;
  bottom: 5rem;
  left: 5%;
  display: flex;

  width: 65%;

  .mobile {
    width: 25%;
    margin-right: -30%;
    margin-top: 25%;
    z-index: 50;
    img {
      width: 110%;
      height: 110%;
    }
  }
  .desktop {
    width: 100%;
    img {
      width: 110%;
      height: 110%;
    }
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
    <StyledProjectImages>
      <div className="mobile">
        <GatsbyImage
          image={mobileGatsbyImage}
          alt={`${title} mobile view`}
          objectFit="contain"
        />
      </div>
      <div className="desktop">
        <GatsbyImage
          image={desktopGatsbyImage}
          alt={`${title} desktop view`}
          objectFit="contain"
        />
      </div>
    </StyledProjectImages>
  )
}

export default ProjectImages
