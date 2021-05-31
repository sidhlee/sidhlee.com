import styled from "styled-components"
import Container from "../components/Container"

const StyledSkills = styled("section")`
  min-height: 100vh;
  background: var(--cl-skills);
`

type SkillsProps = {}

const Skills: React.FC<SkillsProps> = ({}) => {
  return (
    <StyledSkills id="skills">
      <Container>
        <h2>Skills</h2>
      </Container>
    </StyledSkills>
  )
}

export default Skills
