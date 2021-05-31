import { graphql, useStaticQuery } from "gatsby"
import { useState } from "react"
import styled from "styled-components"
import CarouselNav from "../components/CarouselNav"
import Container from "../components/Container"
import ProjectSlide, { Project } from "../components/ProjectSlide"
import { ProjectsQuery } from "../graphqlTypes"

const StyledProjects = styled("section")`
  background: var(--cl-projects);
  min-height: 100vh;
  .carousel {
    width: 100%;
    margin-top: 3rem;
  }
`

type ProjectsProps = {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const projectsData = useStaticQuery<ProjectsQuery>(projectsQuery)

  const projects = projectsData.allMarkdownRemark.edges.map(edge => {
    if (edge?.node.frontmatter) {
      const {
        title,
        logoImage,
        technologies,
        mobileImage,
        desktopImage,
        liveUrl,
        githubUrl,
      } = edge.node.frontmatter

      return {
        title: title || "",
        logoImage: logoImage,
        technologies: technologies || [],
        mobileImage: mobileImage,
        desktopImage: desktopImage,
        liveUrl: liveUrl || "",
        githubUrl: githubUrl || "",
        description: edge.node.excerpt || "",
      }
    }
  })

  return (
    <StyledProjects id="projects">
      <Container>
        <h2>Projects</h2>
        <div className="carousel">
          <ProjectSlide project={projects[currentProjectIndex] as Project} />
          <CarouselNav currentSlideIndex={currentProjectIndex} />
        </div>
      </Container>
    </StyledProjects>
  )
}

export default Projects

const projectsQuery = graphql`
  query Projects {
    allMarkdownRemark(
      filter: { frontmatter: {} }
      sort: { fields: frontmatter___sortIndex }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 500)
          frontmatter {
            title
            logoImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            technologies
            desktopImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            mobileImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            liveUrl
            githubUrl
          }
        }
      }
    }
  }
`
