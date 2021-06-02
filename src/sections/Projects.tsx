import { graphql, useStaticQuery } from "gatsby"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"
import CarouselNav from "../components/CarouselNav"
import Container from "../components/Container"
import ProjectSlide, { Project } from "../components/ProjectSlide"
import { ProjectsQuery } from "../graphqlTypes"
import useCarousel from "../hooks/useCarousel"

const StyledProjects = styled("section")`
  background: var(--cl-projects);
  min-height: 100vh;
  .carousel {
    width: 100%;
    height: 59vh;
    margin-top: 2rem;
    position: relative;
  }
  .slide-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

type ProjectsProps = {}

const Projects: React.FC<ProjectsProps> = ({}) => {
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

  const {
    currentSlideIndex,
    prevSlideIndex,
    navigated,
    isPlaying,
    getTransform,
    showNext,
    showPrev,
    navigateTo,
  } = useCarousel(projects.length)

  // useEffect(() => {
  //   if (isPlaying) {
  //     const id = setTimeout(() => {
  //       showNext()
  //     }, 5000)
  //     return () => clearTimeout(id)
  //   }
  // }, [])

  const project = projects[currentSlideIndex] as Project

  const transition = useTransition(project, {
    key: project.title,
    from: {
      // When you compare number with null, null is coerced into 0!
      transform: getTransform("from"),
      opacity: 0,
    },
    enter: { transform: `translate3d(0%,0,0)`, opacity: 1 },
    leave: {
      transform: getTransform("leave"),
      opacity: 0,
    },
  })

  return (
    <StyledProjects id="projects">
      <Container>
        <h2>Projects</h2>
        <div className="carousel">
          {transition((style, project) => {
            return (
              <animated.div className="slide-container" style={style}>
                <ProjectSlide project={project} style={style} />
              </animated.div>
            )
          })}
        </div>
        <CarouselNav
          currentSlideIndex={currentSlideIndex}
          next={showNext}
          prev={showPrev}
          navigateTo={navigateTo}
        />
      </Container>
    </StyledProjects>
  )
}

export default Projects

const projectsQuery = graphql`
  query Projects {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/projects/" } }
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
