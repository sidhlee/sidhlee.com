import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaLinkedin,
  FaRegCalendarPlus,
  FaTwitterSquare,
} from "react-icons/fa"
import ButtonLink from "../components/ButtonLink"
import Square from "../images/square.svg"
import SpringZoom from "../springs/SpringZoom"
import { useState } from "react"
import ContactPanel from "./ContactPanel"
import useTheme from "../features/lightmode/useTheme"
import { COLORS } from "../../global-style"

const StyledContactLinks = styled("div")<{ $isLight: boolean }>`
  width: 100%;

  h3 {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }

  .contact-panel-wrapper {
    position: relative;
    width: 100%;
    height: 27vh;
    display: flex;
    align-items: flex-end;
  }

  .contact-image {
    position: relative;
    width: 40%;
    max-width: 150px;
    max-height: 150px;
    .gatsby-image-wrapper {
      width: 100%;
      position: relative;
      transform: translate(20%, -20%);
      z-index: 1;

      img {
        z-index: 100;
      }
    }
    .square {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      rect {
        fill: ${({ $isLight }) => ($isLight ? COLORS.pink : COLORS.yellow)};
      }
    }
  }
  .calendly {
    display: flex;
    flex-direction: column;

    // spring wrapper
    div {
      width: 100%;
      a {
        width: 100%;
        margin: 0;
        text-align: center;
      }
    }
  }

  .connect-list {
    display: flex;
    /* justify-content: space-between; */

    .connect-item {
      width: 24%;
      max-width: 60px;
      height: auto;
      &:not(:last-child) {
        margin-right: 1em;
      }
      a,
      button {
        display: inline-block;
        width: 100%;
        height: 100%;
        /* box-shadow: var(--shadow); */
        transition: all 250ms ease;
      }
      svg {
        width: 100%;
        height: 100%;
        fill: ${({ $isLight }) =>
          $isLight ? COLORS.darkGrey : "rgba(255, 255, 255, 0.7)"};
        transition: all 250ms ease;
      }

      transition: all 250ms ease;
      &:hover {
        /* a,
        button {
          box-shadow: 4px 5px 12px 3px rgba(0, 0, 0, 0.4); */
        }
        svg {
          fill: ${({ $isLight }) =>
            $isLight ? COLORS.black : "rgba(255, 255, 255, 1)"};
          transform: scale(1.05);
        }
      }
    }
  }

  @media (min-width: 1200px) {
    max-width: 30%;
    .contact-image {
      max-width: initial;
      max-height: initial;
    }

    .connect-list {
      .connect-item {
        max-width: initial;
      }
    }

    .contact-panel-wrapper {
      position: relative;
      width: 100%;
      height: 15vw;
      display: flex;
      align-items: flex-end;
    }
  }
`

type ContactLinksProps = {}

const ContactLinks: React.FC<ContactLinksProps> = ({}) => {
  const [panelType, setPanelType] = useState<"email" | "phone" | "">("")
  const { theme } = useTheme()

  const closePanel = () => setPanelType("")

  return (
    <StyledContactLinks $isLight={theme === "light"}>
      <div className="contact-panel-wrapper">
        {/* // force rerender on panelType change */}
        <ContactPanel type={panelType} close={closePanel} />
        <div className="contact-image">
          <StaticImage
            src="../images/sid-big-smile.png"
            alt="Sid looking really happy with a sandwich in his hand"
          />
          <Square className="square" role="img" aria-label="yellow square" />
        </div>
      </div>

      <div className="calendly">
        <h3>Schedule a chat with</h3>
        <SpringZoom>
          <ButtonLink href="https://calendly.com/sidhlee" $size="lg">
            <FaRegCalendarPlus role="img" aria-label="calendar icon" />
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
              aria-label="LinkedIn"
            >
              <FaLinkedin role="img" aria-label="LinkedIn" />
            </a>
          </li>
          <li className="connect-item github">
            <a
              href="https://github.com/sidhlee/"
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithubSquare role="img" aria-label="GitHub" />
            </a>
          </li>
          <li className="connect-item twitter">
            <a
              href="https://twitter.com/sidhlee"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitterSquare role="img" aria-label="Twitter" />
            </a>
          </li>
          <li className="connect-item">
            <button
              type="button"
              onClick={() => setPanelType(t => (t === "email" ? "" : "email"))}
              aria-label="Email"
            >
              <FaEnvelopeSquare role="img" aria-label="Email" />
            </button>
          </li>
        </ul>
      </div>
    </StyledContactLinks>
  )
}

export default ContactLinks
