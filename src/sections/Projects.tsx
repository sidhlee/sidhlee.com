import { graphql, useStaticQuery } from "gatsby"
import { useState } from "react"
import styled from "styled-components"
import Container from "../components/Container"
import ProjectSlide, { Project } from "../components/ProjectSlide"
import {} from "../../graphql-types"

const StyledProjects = styled("section")`
  background: var(--cl-projects);
  min-height: 100vh;
  .carousel {
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

type ProjectsProps = {}

const projects: Project[] = [
  {
    title: "Traxmeta",
    logoUrl: "../images/projects/traxmeta-logo.png",
    skills: ["Sass", "REST API", "OOP", "jQuery"],
    description:
      "Check out the track metadata including lyrics and artist bio all in one place from Spotify’s Global Top 200 playlist. Traxmeta combines three different web services  into a single page, Netflix-like user experience.",
    desktopImageUrl: "../images/projects/traxmeta-desktop.png",
    mobileImageUrl: "../images/projects/traxmeta-mobile.png",
    liveUrl: "https://traxmeta.netlify.app/",
    githubUrl: "https://github.com/sidhlee/traxmeta/tree/local-dev",
  },
  {
    title: "Engram",
    logoUrl: "../images/projects/engram-logo.png",
    skills: ["React", "Firebase", "SPA", "OAuth"],
    description:
      "Bookmark has been reinvented with one-stop masonry view, ratings button, link annotation, and read count. Engram will be your personal trainer in your journey to become better developer.",
    desktopImageUrl: "../images/projects/engram-desktop.png",
    mobileImageUrl: "../images/projects/engram-mobile.png",
    liveUrl: "https://engram.netlify.app/",
    githubUrl: "https://github.com/sidhlee/engram",
  },
  {
    title: "Timescraft",
    logoUrl: "../images/projects/timescraft-logo.png",
    skills: ["TypeScript", "Next.js", "Redux", "PWA"],
    description:
      "Do you have a nephew who loves Minecraft? Now they will love learning math too. Learn times table with your favorite Minecraft character and level up to become a math wizard with Timescraft!",
    desktopImageUrl: "../images/projects/timescraft-desktop.png",
    mobileImageUrl: "../images/projects/timescraft-mobile.png",
    liveUrl: "https://timescraft.netlify.app/",
    githubUrl: "https://github.com/sidhlee/timescraft",
  },
]

const Projects: React.FC<ProjectsProps> = ({}) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const projectsData = useStaticQuery(projectsQuery)

  return (
    <StyledProjects>
      <Container>
        <h2>Projects</h2>
        <div className="carousel">
          {/* <ProjectSlide project={projects[currentProjectIndex]} /> */}
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
          frontmatter {
            title
            logoImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            technologies
            desktopImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            mobileImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_noBase64
                }
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
