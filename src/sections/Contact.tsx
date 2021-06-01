import styled from "styled-components"
import Container from "../components/Container"

const StyledContact = styled("div")`
  min-height: 100vh;
  background: var(--cl-contact);
`

type ContactProps = {}

const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <StyledContact id="contact">
      <Container>
        <h2>Contact</h2>
      </Container>
    </StyledContact>
  )
}

export default Contact
