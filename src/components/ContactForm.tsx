import styled from "styled-components"
import Button from "./Button"

const StyledContactForm = styled("div")`
  .contact-form__subheading {
    margin: 1em 0;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    input:first-of-type {
      margin-right: 0.5em;
    }

    textarea {
      margin-top: 0.5em;
      resize: none;
    }

    .inputs {
      display: flex;
      input {
        flex: 1 0 auto;
      }
    }

    button {
      align-self: flex-end;
      margin-right: 0;
      transition: all 250ms ease;
      &:hover {
        background: var(--cl-projects);
        border-color: var(--cl-projects);
      }
    }
  }
`

type ContactFormProps = {}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  return (
    <StyledContactForm>
      <h3>Let's Get In Touch!</h3>
      <div className="contact-form__subheading">
        <p>I love exchanging ideas and making new friends!</p>
        <p>You can also reach me directly at sidhlee@gmail.com</p>
      </div>
      <form>
        <div className="inputs">
          <label className="visually-hidden" htmlFor="name">
            Your name
          </label>
          <input id="name" type="text" placeholder="You name" />
          <label className="visually-hidden" htmlFor="email">
            Your email
          </label>
          <input id="email" type="email" placeholder="Email" />
          <label className="visually-hidden" htmlFor="message">
            Message
          </label>
        </div>
        <textarea id="name" rows="10" placeholder="Hi Sid 👋, I am ..." />
        <Button type="submit">Send</Button>
      </form>
    </StyledContactForm>
  )
}

export default ContactForm
