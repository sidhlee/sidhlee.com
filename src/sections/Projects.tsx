import styled from "styled-components"
import Container from "../components/Container"

const StyledProjects = styled("section")`
  background: var(--cl-projects);
`

type ProjectsProps = {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <StyledProjects>
      <Container>
        <h2>Projects</h2>
      </Container>
    </StyledProjects>
  )
}

export default Projects
