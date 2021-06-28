import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import ButtonLink from "../components/ButtonLink"
import Container from "../components/Container"
import Square from "../images/square.svg"
import resumeFile from "../download/sid-lee-resume.pdf"
import useTheme from "../features/lightmode/useTheme"
import { COLORS } from "../../global-style"

const StyledAbout = styled("section")<{ $isLight: boolean }>`
  background: var(--cl-about);
  min-height: 100vh;
  transition: background-color 200ms ease;

  /* pull buttons front! */
  a {
    position: relative;
    z-index: 1;
  }

  .about-content {
    min-height: var(--min-height-section-content);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .about-image {
      order: 2;
      justify-self: center;
      align-self: center;
      margin: 0;
      width: 40vw;
      height: 40vw;
      max-width: 250px;
      max-height: 250px;
      position: relative;
      left: 25vw;
      bottom: 5vh;
      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        z-index: 1;
      }

      .square {
        position: absolute;
        width: 80%;
        height: 80%;
        left: -25%;
        bottom: -25%;
        rect {
          fill: ${({ $isLight }) => ($isLight ? COLORS.pink : COLORS.yellow)};
        }
      }
    }

    .about-text {
      padding-top: var(--pt-section-content);
      max-width: 55ch;
    }

    .about-links {
      margin-left: -0.5rem;
      width: 50%;
      min-width: 200px;
      margin-top: 1em;
      display: flex;
      flex-direction: column;
      a {
        width: 100%;
      }
    }

    @media (min-width: 1040px) {
      flex-direction: row;
      .about-image {
        order: 0;
        width: 20vw;
        height: 20vw;
        max-width: initial;
        max-height: initial;
        margin-right: 5vw;
        top: var(--py);
        left: 0;
        .square {
          position: absolute;
          width: 85%;
          height: 85%;
        }
      }
      .about-links {
        min-width: 26rem;
        flex-direction: row;
        margin-bottom: 2rem;
        a {
          flex: 1 0 45%;
        }
      }
    }
  }
`

type AboutProps = {}

const About: React.FC<AboutProps> = ({}) => {
  const { theme } = useTheme()
  return (
    <StyledAbout id="about" $isLight={theme === "light"}>
      <Container>
        <h2>About</h2>
        <div className="about-content">
          <div className="about-image">
            <StaticImage
              src="../images/headshot1-bw.png"
              alt="Sid smiling"
              objectFit="contain"
            />
            <Square
              className="square float"
              role="img"
              aria-label="yellow square"
            />
          </div>
          <div className="about-text">
            <p className="heading-sm">
              Hi{" "}
              <span role="img" aria-label="hand-wave">
                👋
              </span>
              , my name is Sid Lee
            </p>
            <p className="text-lg mt-3">
              I'm a fullstack web developer based in Toronto. Learning new
              technologies and building applications have been a great source of
              excitement for me. I have designed and built many user-facing apps
              and backend servers with HTML, CSS, JavaScript, React and Node.
              When I'm not writing code, you can find me jamming on my electric
              piano or drinking tea while reading a paperback.
            </p>
            <div className="about-links">
              <ButtonLink href={resumeFile} download $theme="projects">
                View Resume
              </ButtonLink>
              <ButtonLink
                href="https://www.linkedin.com/in/sid-hayoun-lee/"
                $theme="main"
              >
                View LinkedIn
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </StyledAbout>
  )
}

export default About
