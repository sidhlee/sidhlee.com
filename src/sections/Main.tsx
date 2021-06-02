import styled from "styled-components"
import PianoLid from "../images/piano-lid.svg"
import PianoKeybed from "../images/piano-keybed.svg"
import Container from "../components/Container"
import ButtonLink from "../components/ButtonLink"
import SpringZoom from "../springs/SpringZoom"

// TODO: fix vertical scroll in main section
const StyledMain = styled("section")`
  // Take mobile UI (keyboard/safari control bar) into account when calculating 100vh
  // https://css-tricks.com/css-fix-for-100vh-in-mobile-webkit/
  min-height: 100vh;

  background-color: var(--cl-main);

  .grid {
    /* min-height: calc(100vh - var(--py) - var(--height-navbar)); */
    // https://stackoverflow.com/questions/52861086/why-does-minmax0-1fr-work-for-long-elements-while-1fr-doesnt
    // allows content to overflow the track
    grid-template-columns: auto minmax(0, 1fr);
    /* grid-template-rows: minmax(1rem, 4rem) auto; */
  }

  .main-content {
    min-height: 80vh;
    display: flex;

    align-items: center;
    position: relative;
  }

  header {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 38rem;
    z-index: 200;
    // https://css-tricks.com/hash-tag-links-padding/
    // fix h1 hidden behind navbar when navigated
    h1::before {
      display: block;
      content: " ";
      margin-top: calc(var(--height-navbar) * -1);
      height: var(--height-navbar);
      visibility: hidden;
      pointer-events: none;
    }
    .intro {
      margin-top: var(--mt-section-content);
      margin-left: min(max(0px, 2vw), 2rem);
      .headline {
        /* font-size: var(--fz-xl);
        font-weight: bold;
        line-height: 1.3; */
        span {
          display: block;
        }
      }
      .sub-headline {
        max-width: 24em;
        font-size: var(--fz-subheading);
        margin: 1rem 0 2rem;
      }
    }
  }

  .piano {
    position: absolute;
    right: min(max(-400px, calc(30vw - 400px)), 200px);
    top: 0;
    display: flex;
    flex-direction: column;
    --size: min(max(300px, 40vw), 570px);
    --size: 500px;
    width: var(--size);
    height: calc(var(--size) * 1.3);
    transform: rotate(24deg);
    transform-origin: 20% 100%;
    .lid,
    .bed {
      flex-shrink: 0;
    }
    .lid {
      width: 100%;
      height: 80%;
    }
    .bed {
      width: 80%;
      position: relative;
      margin-top: -1rem;
      left: 2rem;
      transform: rotate(-5deg);
    }
  }
  @media (max-width: 1090px) {
    .piano {
      filter: brightness(0.35);
    }
  }
`

type MainProps = {}

const Main: React.FC<MainProps> = ({}) => {
  return (
    <StyledMain>
      <Container>
        <div className="main-content">
          <header>
            <h1 id="main">Sid Lee</h1>
            <div className="intro">
              <p className="headline heading-xl">
                Hi! I am a <span>Web Developer</span>
              </p>
              <p className="sub-headline">
                With a background in music and passion for creativity, I build
                accessible and responsive web applications that offer great
                value and experience to the user.
              </p>
              <SpringZoom>
                <ButtonLink to="/#about" $size="lg">
                  #Open to work!
                </ButtonLink>
              </SpringZoom>
            </div>
          </header>
          <div className="piano">
            <PianoLid className="lid" />
            <PianoKeybed className="bed" />
          </div>
        </div>
      </Container>
    </StyledMain>
  )
}

export default Main
