import { graphql, useStaticQuery } from "gatsby"
import { useState } from "react"
import styled from "styled-components"
import Container from "../components/Container"
import Skill from "../components/Skill"
import { File, MarkdownRemarkFrontmatter, SkillsQuery } from "../graphqlTypes"
import SkillModal from "../components/SkillModal"

const StyledSkills = styled("section")`
  min-height: 100vh;
  background: var(--cl-skills);

  .skill-list {
    margin: 0 auto;
    padding-top: var(--pt-section-content);
    min-height: calc(
      var(--min-height-section-content) - var(--pt-section-content)
    );
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    justify-content: center;
    justify-items: center;
    max-width: 90ch;

    /* li:nth-child(2n) {
      position: relative;
      top: 1.5em;
    } */
  }
`

type Skill = {
  title: string
  icon: File
  brandColor: string
  excerpt: string
  relatedKills: string[]
  tags: string[]
}

type SkillsProps = {}

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
      relatedSkills: related_skills || [],
      icon: icon as File,
      brandColor: brandColor || "",
      tags: tags || [],
      excerpt: excerpt || "",
    }
  })

  const [skillModalOpen, setSkillModalOpen] = useState(false)
  const [currentSkillTitle, setCurrentSkillTitle] = useState("HTML")

  const currentSkill = skills.filter(
    skill => skill.title === currentSkillTitle
  )[0]

  const { title, icon, brandColor, excerpt, relatedSkills, tags } = currentSkill

  const availableSkills = skills.map(skill => skill.title)

  const handleSkillButtonClick = (skillTitle: string) => {
    setCurrentSkillTitle(skillTitle)
    setSkillModalOpen(true)
  }

  const closeModal = () => {
    setSkillModalOpen(false)
  }

  const selectCurrentSkill = (skillTitle: string) => {
    console.log({ skillTitle })
    const index = skills.findIndex(skill => skill.title === skillTitle)
    if (index >= 0) {
      setCurrentSkillTitle(skillTitle)
    }
  }

  return (
    <>
      <StyledSkills id="skills">
        <Container>
          <h2>Skills</h2>
          <ul className="skill-list">
            {skills.map((skill, i) => {
              const { title, brandColor } = skill
              return (
                <Skill
                  key={title}
                  title={title}
                  brandColor={brandColor}
                  setCurrentSkill={() => handleSkillButtonClick(title)}
                />
              )
            })}
          </ul>
        </Container>
      </StyledSkills>
      <>
        <SkillModal
          title={title}
          icon={icon}
          excerpt={excerpt}
          relatedSkills={relatedSkills as string[]}
          tags={tags as string[]}
          isOpen={skillModalOpen}
          close={closeModal}
          selectCurrentSkill={selectCurrentSkill}
          availableSkills={availableSkills}
        />
      </>
    </>
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
