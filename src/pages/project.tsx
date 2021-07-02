import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/Container"
import ButtonLink from "../components/ButtonLink"
import { ProjectsQuery } from "../graphqlTypes"
import ProjectCard from "../features/view-all-projects/ProjectCard"

const StyledProject = styled("div")``

type projectProps = {
  data: ProjectsQuery
}

const project: React.FC<projectProps> = ({ data }) => {
  const projects = data.allMarkdownRemark.edges.map(edge => {
    const {
      githubUrl,
      liveUrl,
      title,
      desktopImage,
      technologies,
    } = edge.node.frontmatter!

    return {
      except: edge.node.excerpt,
      githubUrl,
      liveUrl,
      title,
      desktopImage,
      technologies,
    }
  })

  console.log(projects)

  return (
    <Layout>
      <Seo />
      <StyledProject>
        <Container>
          <h1>My Projects</h1>
          <ButtonLink to="/">Back to Main</ButtonLink>
          <ul>
            {projects.map(project => (
              <li key={project.title}>
                {/* TODO: how to handle graphQL "Maybe" type? */}
                <ProjectCard title={project.title} />
              </li>
            ))}
          </ul>
        </Container>
      </StyledProject>
    </Layout>
  )
}

export default project

export const query = graphql`
  query {
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
