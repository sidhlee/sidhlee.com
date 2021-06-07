import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import ButtonLink from "../components/ButtonLink"
import Container from "../components/Container"
import Square from "../images/square.svg"
import resumeFile from "../download/sid-lee-resume.pdf"

const StyledAbout = styled("section")`
  background: var(--cl-about);
  min-height: 100vh;

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
      }
    }

    .about-text {
      padding-top: var(--pt-section-content);
      max-width: 55ch;
    }

    .about-links {
      margin-left: -0.5rem;
      width: 50%;
      margin-top: 1em;
      display: flex;
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
    }
  }
`

type AboutProps = {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <StyledAbout id="about">
      <Container>
        <h2>About</h2>
        <div className="about-content">
          <div className="about-image">
            <StaticImage
              src="../images/headshot1-bw.png"
              alt="Sid smiling"
              objectFit="contain"
            />
            <Square className="square float" />
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
              I'm a web developer whose passion is to build accessible and
              responsive user experience using front-end and full stack
              technologies. <wbr></wbr>With a background in teaching university
              music courses and producing chart-topping albums, <wbr></wbr>I
              have developed a <strong>consistent work ethic</strong>,{" "}
              <strong>strong communication skills</strong>, and{" "}
              <strong>problem solving techniques</strong> for unique challenges.
            </p>
            <div className="about-links">
              <ButtonLink href={resumeFile} download $theme="projects">
                View Resume
              </ButtonLink>
              {/* <ButtonLink
                href="https://www.linkedin.com/in/sid-hayoun-lee/"
                $outline
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </ButtonLink> */}
            </div>
          </div>
        </div>
      </Container>
    </StyledAbout>
  )
}

export default About
