import styled from "styled-components"

const StyledContainer = styled("div")`
  /* max-width: var(--max-width-container); */
  height: 100%;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding: var(--py) var(--px);
`

type ContainerProps = {}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
