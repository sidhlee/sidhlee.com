import styled from "styled-components"
import ContactForm from "../components/ContactForm"
import ContactLinks from "../components/ContactLinks"
import Container from "../components/Container"

const StyledContact = styled("div")`
  min-height: 100vh;
  background: var(--cl-contact);

  .wrapper {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: var(--py);
    /* iPad pro 12inch */
    @media (min-width: 1024px) {
      flex-direction: row;
      max-width: 1100px;
      > *:first-child {
        margin-right: 3rem;
      }
    }
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
