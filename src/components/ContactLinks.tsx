import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaLinkedin,
  FaPhoneSquare,
  FaRegCalendarPlus,
  FaTwitterSquare,
} from "react-icons/fa"
import ButtonLink from "../components/ButtonLink"
import Square from "../images/square.svg"
import SpringZoom from "../springs/SpringZoom"

const StyledContactLinks = styled("div")`
  padding: 2rem;

  h3 {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }

  .contact-image {
    position: relative;
    width: 180px;
    height: 180px;
    .gatsby-image-wrapper {
      position: relative;
      left: 25%;
      bottom: 25%;
      img {
        z-index: 100;
      }
    }
    .square {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 90%;
      height: 90%;
    }
  }
  .calendly {
    display: flex;
    flex-direction: column;
    a {
      margin: 0;
      text-align: center;
    }
  }

  .connect-list {
    display: flex;
    justify-content: space-between;
    gap: 0.5em;
    .connect-item {
      width: 2.5rem;
      height: 2.5rem;
      a,
      button {
        display: inline-block;
        width: 100%;
        height: 100%;
        box-shadow: var(--shadow);
      }
      svg {
        width: 100%;
        height: 100%;
        fill: var(--cl-projects);
      }
    }
  }
`

type ContactLinksProps = {}

const ContactLinks: React.FC<ContactLinksProps> = ({}) => {
  return (
    <StyledContactLinks>
      <div className="contact-image">
        <StaticImage
          src="../images/sid-big-smile.png"
          alt="Sid looking really happy with a sandwich in his hand"
        />
        <Square className="square" />
      </div>

      <div className="calendly">
        <h3>Schedule a chat with</h3>
        <SpringZoom>
          <ButtonLink href="https://calendly.com/sidhlee" $size="lg">
            <FaRegCalendarPlus />
            <span>Calendly</span>
          </ButtonLink>
        </SpringZoom>
      </div>

      <div className="lets-connect">
        <h3>Let's Connect!</h3>
        <ul className="connect-list">
          <li className="connect-item">
            <a
              href="https://www.linkedin.com/in/sid-hayoun-lee/"
              target="_blank"
            >
              <FaLinkedin aria-label="LinkedIn" />
            </a>
          </li>
          <li className="connect-item">
            <a href="https://github.com/sidhlee/" target="_blank">
              <FaGithubSquare aria-label="GitHub" />
            </a>
          </li>
          <li className="connect-item">
            <a href="https://twitter.com/sidhlee" target="_blank">
              <FaTwitterSquare aria-label="Twitter" />
            </a>
          </li>
          <li className="connect-item">
            <button type="button">
              <FaEnvelopeSquare aria-label="Email" />
            </button>
          </li>
          <li className="connect-item">
            <button type="button">
              <FaPhoneSquare aria-label="Phone" />
            </button>
          </li>
        </ul>
      </div>
    </StyledContactLinks>
  )
}

export default ContactLinks
