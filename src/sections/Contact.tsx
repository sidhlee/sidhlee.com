import styled from "styled-components"
import ContactForm from "../components/ContactForm"
import ContactLinks from "../components/ContactLinks"
import Container from "../components/Container"

const StyledContact = styled("div")`
  min-height: 100vh;
  background: var(--cl-contact);

  .wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: var(--py);
  }
`

type ContactProps = {}

const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <StyledContact id="contact">
      <Container>
        <h2>Contact</h2>
        <div className="wrapper">
          <ContactLinks />
          <ContactForm />
        </div>
      </Container>
    </StyledContact>
  )
}

export default Contact
