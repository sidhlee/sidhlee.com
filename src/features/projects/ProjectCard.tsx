import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"
import styled from "styled-components"
import ButtonLink from "../../components/ButtonLink"

const StyledProjectCard = styled("article")`
  /* max-width: 20rem; */
  margin: 0 auto;
  min-width: 300px;
  max-width: 380px;
  min-height: 20rem;
  position: relative;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.04),
    0 6.7px 5.3px rgba(0, 0, 0, 0.05), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.07), 0 41.8px 33.4px rgba(0, 0, 0, 0.08),
    0 100px 80px rgba(0, 0, 0, 0.1);

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: var(--fz-card-heading);
    }

    h2,
    li {
      text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
      transition: opacity 300ms ease;
      transition-delay: 100ms;
      opacity: 0;
    }
    ul {
      li {
        text-align: center;
        font-size: var(--fz-subheading);
        font-weight: bold;
        margin: 0.25em;
      }
    }

    a {
      flex-grow: 0;
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
      transition: all 300ms ease;
      transition-delay: 100ms;
      transform: translateY(50%);
      opacity: 0;
    }
  }
  &:hover .overlay {
    opacity: 1;
    h2,
    li {
      transition: opacity 300ms ease;
      transition-delay: 100ms;
      opacity: 1;
    }
    a {
      transition: all 300ms ease;
      transition-delay: 50ms;
      transform: translateY(0%);
      opacity: 1;
    }
  }
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.7) 61%,
      rgba(0, 0, 0, 0.9) 100%
    );
    transition: opacity 250ms ease;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }
  .gatsby-image-wrapper {
    /* border: 5px solid blue; */
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    img {
      width: 100%;
      height: 140%;
      margin-top: -20%;
    }
  }
`

type ProjectCardProps = {
  title: string
  excerpt?: string
  desktopImage: FileNode
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
  const cardImage = getImage(desktopImage)!

  return (
    <StyledProjectCard>
      <GatsbyImage
        image={cardImage}
        alt={title}
        objectFit="cover"
        objectPosition="center"
        draggable="false"
      />
      <div className="overlay">
        <h2>{title}</h2>
        <ul className="tech-list">
          {technologies!.map(tech => (
            <li>{tech}</li>
          ))}
        </ul>
        <ButtonLink to="#">View Details</ButtonLink>
      </div>
    </StyledProjectCard>
  )
}

export default ProjectCard
