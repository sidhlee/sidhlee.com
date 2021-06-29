import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/Container"

const StyledProject = styled("div")``

type projectProps = {}

const project: React.FC<projectProps> = ({}) => {
  return (
    <Layout>
      <Seo />
      <StyledProject>
        <Container>
          <h1>My Projects</h1>
        </Container>
      </StyledProject>
    </Layout>
  )
}

export default project
