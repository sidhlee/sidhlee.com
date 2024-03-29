import { graphql, useStaticQuery } from "gatsby"
import { useState } from "react"
import styled from "styled-components"
import Container from "../../components/Container"
import Skill from "./Skill"
import {
  File,
  MarkdownRemarkFrontmatter,
  SkillsQuery,
} from "../../graphqlTypes"
import SkillModal from "./SkillModal"
import { mq } from "../../../global-style"

const StyledSkills = styled("section")`
  background: var(--cl-skills);
  transition: background-color 200ms ease;

  .skill-list {
    margin: 0 auto;
    padding-top: var(--pt-section-content);
    padding-bottom: var(--pt-section-content);
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    justify-items: flex-start;
    width: 80vw;
    max-width: 90ch;
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
      icon: icon,
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
          <p className="underline">Click on each skill to see detail </p>
          <span role="img" aria-label="point down">
            👇
          </span>
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
          icon={icon as any}
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
          excerpt(pruneLength: 1000, format: HTML)
        }
      }
    }
  }
`
