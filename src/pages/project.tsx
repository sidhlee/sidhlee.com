import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/Container"
import ButtonLink from "../components/ButtonLink"
import { ProjectsQuery } from "../graphqlTypes"
import ProjectCard from "../features/view-all-projects/ProjectCard"

const StyledProject = styled("div")`
  min-height: 100vh;
`

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
          <ul>
            {projects.map(({ title, excerpt }) => (
              <li key={title}>
                <ProjectCard title={title} excerpt={excerpt} />
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
