import styled from "styled-components"
import ButtonLink from "../components/ButtonLink"
import Container from "../components/Container"
import Layout from "../features/layout/Layout"
import Seo from "../components/seo"

const StyledSuccess = styled("div")`
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .back-to-main {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
`

type successProps = {}

const success: React.FC<successProps> = ({}) => {
  return (
    <Layout>
      <Seo />
      <StyledSuccess>
        <Container>
          <h1>
            Thank You!{" "}
            <span role="img" aria-label="party">
              🎉
            </span>
          </h1>
          <p>
            Your message has been successfully sent. <br /> I will get back to
            you ASAP!
          </p>
          <div className="back-to-main">
            <ButtonLink to="/" $theme="main">
              Back To Main
            </ButtonLink>
          </div>
        </Container>
      </StyledSuccess>
    </Layout>
  )
}

export default success
