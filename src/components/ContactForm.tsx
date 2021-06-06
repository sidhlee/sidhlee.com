import { useState } from "react"
import styled from "styled-components"
import Button from "./Button"

const StyledContactForm = styled("div")`
  width: 100%;

  .contact-form__subheading {
    margin: 1em 0;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    /* input,
    textarea {
      width: 100%;
    } */

    input:first-of-type {
      margin-bottom: 0.5em;
    }

    textarea {
      margin-top: 0.5em;
      resize: none;
    }

    .inputs {
      display: flex;
      flex-direction: column;
      input {
        flex: 1 0 auto;
      }
    }

    button {
      margin-top: 0.5rem;
      align-self: flex-end;
      margin-right: 0;
    }

    @media (min-width: 670px) {
      .inputs {
        flex-direction: row;
        input:first-of-type {
          margin-bottom: 0;
          margin-right: 0.5em;
        }
      }
    }
    /* iPad pro 12inch */
    @media (min-width: 1024px) {
      .inputs {
        flex-direction: column;
        input:first-of-type {
          margin-bottom: 0.5em;
          margin-right: 0;
        }
      }
    }

    @media (min-width: 1200px) {
      .inputs {
        flex-direction: row;
        input:first-of-type {
          margin-bottom: 0;
          margin-right: 0.5em;
        }
      }
    }
  }
`

type ContactFormProps = {}

// https://www.gatsbyjs.com/docs/building-a-contact-form/
const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <StyledContactForm>
      <h3>Let's Get In Touch!</h3>
      <div className="contact-form__subheading">
        <p>I love exchanging ideas and making new friends!</p>
        <p>You can also reach me directly at sidhlee@gmail.com</p>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="inputs">
          <label className="visually-hidden" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label className="visually-hidden" htmlFor="email">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <label className="visually-hidden" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={10}
          placeholder="Hi Sid 👋, I am ..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
        <Button type="submit">Send</Button>
      </form>
    </StyledContactForm>
  )
}

export default ContactForm
