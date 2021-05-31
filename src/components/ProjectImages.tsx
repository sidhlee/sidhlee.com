import styled from "styled-components"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"

// TODO: crop png right up to the image border
const StyledProjectImages = styled("div")`
  display: flex;
  align-items: center;
  width: 65%;
  margin-left: 2rem;

  .mobile {
    width: 25%;
    z-index: 50;
    margin-right: -20%;
    margin-top: 10%;
  }
  .desktop {
    width: 100%;
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
