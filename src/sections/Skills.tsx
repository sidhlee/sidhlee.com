import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Container from "../components/Container"
import Skill from "../components/Skill"
import { MarkdownRemarkFrontmatter, SkillsQuery } from "../graphqlTypes"

const StyledSkills = styled("section")`
  min-height: 100vh;
  background: var(--cl-skills);

  .skill-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
`

type SkillsProps = {}

const skills = ["HTML", "CSS", "Sass", "JavaScript", "jQuery"]

const Skills: React.FC<SkillsProps> = ({}) => {
  const skillsData = useStaticQuery<SkillsQuery>(skillsQuery)

  const skills = skillsData.allMarkdownRemark.edges.map(edge => {
    const { frontmatter, excerpt } = edge.node

    const {
      title,
      related_skills,
      icon,
      brandColor,
      tags,
    } = frontmatter as MarkdownRemarkFrontmatter

    return {
      title: title || "",
      related_skills: related_skills || [],
      icon: icon,
      brandColor: brandColor || "",
      tags: tags || [],
      excerpt: excerpt || "",
    }
  })

  return (
    <StyledSkills id="skills">
      <Container>
        <h2>Skills</h2>
        <ul className="skill-list">
          {skills.map(skill => {
            const { title, brandColor } = skill
            return <Skill title={skill.title} brandColor={brandColor} />
          })}
        </ul>
      </Container>
    </StyledSkills>
  )
}

export default Skills

const skillsQuery = graphql`
  query Skills {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/skills/" } }
      sort: { fields: frontmatter___sortIndex }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            related_skills
            related_skills
            icon {
              childImageSharp {
                gatsbyImageData
              }
            }
            brandColor
            tags
          }
          excerpt(pruneLength: 1000)
        }
      }
    }
  }
`
