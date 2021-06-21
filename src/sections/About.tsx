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
              I build accessible and responsive web applications using HTML,
              CSS, React, JavaScript, and TypeScript. With a{" "}
              <strong>Full-Stack Certification</strong> from freeCodeCamp, I
              have created many React apps for 2+ years now. I also have worked
              on fast-paced team projects that involved pair programming and
              peer code reviews to implement various features and continuously
              deploy to the production. From my previous experience in teaching
              in universities, I developed strong{" "}
              <strong>communication skills</strong>, the ability to{" "}
              <strong>solve problems</strong> in a collaborative environment,
              and <strong>a sense of empathy</strong> while mentoring students
              to help overcome their challenges.
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
