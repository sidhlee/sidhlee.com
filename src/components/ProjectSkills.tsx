import styled from "styled-components"

const StyledProjectSkills = styled("ul")``

type ProjectSkillsProps = {
  skills: string[]
}

const ProjectSkills: React.FC<ProjectSkillsProps> = ({ skills }) => {
  return (
    <StyledProjectSkills>
      {skills.map(skill => (
        <li className="skill-item" key={skill}>
          {skill}
        </li>
      ))}
    </StyledProjectSkills>
  )
}

export default ProjectSkills
