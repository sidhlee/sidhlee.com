import styled from "styled-components"

const StyledTechStacks = styled("ul")`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0.5em;
  margin-left: -0.25em;
  .tech-item {
    background: var(--cl-about);
    padding: 0.2em 0.5em;
    margin: 0.25em;
    font-family: var(--ff-heading);
    font-size: var(--fz-tech-stacks);
    border-radius: var(--border-radius);
  }
`

type TechStacksProps = {
  technologies: string[]
}

const TechStacks: React.FC<TechStacksProps> = ({ technologies }) => {
  return (
    <StyledTechStacks>
      {technologies.map(tech => (
        <li className="tech-item" key={tech}>
          {tech}
        </li>
      ))}
    </StyledTechStacks>
  )
}

export default TechStacks
