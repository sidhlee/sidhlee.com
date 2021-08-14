import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/Container"
import ButtonLink from "../components/ButtonLink"
import { ProjectsQuery } from "../graphqlTypes"
import ProjectCard from "../features/view-all-projects/ProjectCard"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"

const StyledProject = styled("div")`
  min-height: 100vh;
  .project-list {
    margin: 2rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2.5rem;
  }
`

type projectProps = {
  data: ProjectsQuery
}

const Projects: React.FC<projectProps> = ({ data }) => {
  const projects = data.allMarkdownRemark.edges.map(edge => {
    const {
      githubUrl,
      liveUrl,
      title,
      desktopImage,
      technologies,
    } = edge.node.frontmatter!

    return {
      excerpt: edge.node.excerpt,
      githubUrl,
      liveUrl,
      title,
      desktopImage,
      technologies,
    }
  })

  return (
    <Layout>
      <Seo />
      <StyledProject>
        <Container>
          <h1>My Projects</h1>
          <ButtonLink to="/">Back to Main</ButtonLink>
          <ul className="project-list">
            {projects.map(({ title, excerpt, desktopImage, technologies }) => (
              <li key={title}>
                <ProjectCard
                  title={title || "untitled"}
                  excerpt={excerpt}
                  desktopImage={desktopImage as FileNode}
                  technologies={technologies}
                />
              </li>
            ))}
          </ul>
        </Container>
      </StyledProject>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
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
