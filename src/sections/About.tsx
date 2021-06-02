import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import ButtonLink from "../components/ButtonLink"
import Container from "../components/Container"
import Square from "../images/square.svg"
import { FaLinkedin } from "react-icons/fa"
import SpringPaintRight from "../springs/SpringPaintRight"

const StyledAbout = styled("section")`
  background: var(--cl-about);
  min-height: 100vh;

  .grid {
    grid-template-columns: 1fr 1.25fr;
  }

  .about-image {
    justify-self: center;
    margin-top: 8rem;
    max-width: 300px;
    position: relative;
    img {
      height: auto;
      z-index: 100;
    }
    .square {
      position: absolute;
      width: 100%;
      left: -30%;
      bottom: -15%;
    }
  }

  .about-content {
    margin-top: 2rem;
    max-width: 30rem;
  }

  .about-links {
    margin-left: -0.5rem;
    width: 50%;
    margin-top: 1em;
    display: flex;
  }
`

type AboutProps = {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <StyledAbout id="about">
      <Container>
        <h2>About</h2>
        <div className="grid">
          <div className="about-image">
            <StaticImage
              src="../images/headshot1-bw.png"
              alt="Sid smiling"
              objectFit="contain"
            />
            <Square className="square" />
          </div>
          <div className="about-content">
            <p className="heading-sm">
              Hi{" "}
              <span role="img" aria-label="hand-wave">
                👋
              </span>
              , my name is Sid Hayoun Lee
            </p>
            <p className="text-lg mt-3">
              I'm a web developer whose passion is to build accessible and
              responsive user experience using front-end and full stack
              technologies. <br />
              With a background in teaching university music courses and
              producing chart-topping albums,
              <br /> I have developed a consistent work ethic, strong
              communication skills, and problem solving techniques for unique
              challenges.
            </p>
            <div className="about-links">
              <ButtonLink to="#" $theme="projects">
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
