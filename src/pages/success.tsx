import styled from "styled-components"
import ButtonLink from "../components/ButtonLink"
import Layout from "../components/layout"
import Seo from "../components/seo"

const StyledSuccess = styled("div")`
  min-height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin-top: 2rem;
  }
`

type successProps = {}

const success: React.FC<successProps> = ({}) => {
  return (
    <Layout>
      <Seo title="success" />
      <StyledSuccess>
        <h1>
          Thank You!{" "}
          <span role="img" aria-label="party">
            🎉
          </span>
        </h1>
        <p>
          Your message has been successfully sent. I will get back to you ASAP!
        </p>
        <div>
          <ButtonLink to="/">Back To Main</ButtonLink>
        </div>
      </StyledSuccess>
    </Layout>
  )
}

export default success
