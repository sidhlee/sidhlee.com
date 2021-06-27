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
  overflow: hidden;
  transition: background-color 200ms ease;

  .projects-content {
    min-height: var(--min-height-section-content);
    display: flex;
    flex-direction: column;
    justify-content: center;

    --height-carousel-nav: 15vh;
    .carousel {
      height: calc(
        var(--min-height-section-content) - var(--height-carousel-nav)
      );
      height: calc(70vw + 10rem);
      margin-top: 1rem;
      position: relative;
    }
    .transition-wrapper {
      position: relative;
      height: 100%;
    }

    .animated-div {
      display: flex;
      align-items: center;
    }

    @media (min-width: 930px) {
      .carousel {
        height: calc(20vw + 10rem);
        margin-top: 0;
      }
      .CarouselNav {
        margin-top: 1rem;
      }
    }
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
    bindDrag,
  } = useCarousel(projects.length)

  const project = projects[currentSlideIndex] as Project

  const transition = useTransition(project, {
    key: project.title,
    from: {
      // When you compare number with null, null is coerced into 0!
      position: "absolute",
      transform: getTransform("from"),
      height: "100%",
      opacity: 0,
    },
    enter: {
      position: "absolute",
      transform: `translate3d(0%,0,0)`,
      opacity: 1,
    },
    leave: {
      position: "absolute",
      transform: getTransform("leave"),
      opacity: 0,
    },
  })

  return (
    <StyledProjects id="projects">
      <Container>
        <h2>Projects</h2>
        <div className="projects-content">
          <div className="carousel">
            <div className="transition-wrapper">
              {transition((style, project) => {
                return (
                  <animated.div className="animated-div" style={style as any}>
                    <ProjectSlide
                      project={project}
                      style={style}
                      bindDrag={bindDrag}
                    />
                  </animated.div>
                )
              })}
            </div>
          </div>
          <CarouselNav
            currentSlideIndex={currentSlideIndex}
            numberOfSlides={projects.length}
            next={showNext}
            prev={showPrev}
            navigateTo={navigateTo}
          />
        </div>
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
