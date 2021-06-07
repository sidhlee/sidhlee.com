import styled from "styled-components"
import ContactForm from "../components/ContactForm"
import ContactLinks from "../components/ContactLinks"
import Container from "../components/Container"

const StyledContact = styled("section")`
  background: var(--cl-contact);

  .contact-content {
    max-width: 600px;
    min-height: calc(
      var(--min-height-section-content) - var(--pt-section-content) -2rem
    );
    margin: 0 auto;
    padding-top: var(--pt-section-content);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > *:first-child {
      margin-bottom: 3rem;
    }
    /* iPad pro 12inch */
    @media (min-width: 1024px) {
      flex-direction: row;
      max-width: 78vw;
      > *:first-child {
        margin-right: 7.5vw;
      }
      > *:last-child {
        position: relative;
        bottom: 1rem;
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
        <div className="contact-content">
          <ContactLinks />
          <ContactForm />
        </div>
      </Container>
    </StyledContact>
  )
}

export default Contact
