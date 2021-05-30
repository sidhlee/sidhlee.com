import styled from "styled-components"
import PianoLid from "../images/piano-lid.svg"
import PianoKeybed from "../images/piano-keybed.svg"
import Button from "../components/Button"
import Container from "../components/Container"

const StyledMain = styled("section")`
  min-height: 100vh;
  // Take mobile UI (keyboard/safari control bar) into account when calculating 100vh
  // https://css-tricks.com/css-fix-for-100vh-in-mobile-webkit/
  min-height: -webkit-fill-available;
  padding-top: var(--pt);
  overflow-x: hidden;
  background-color: var(--cl-main);
  .grid {
    display: grid;
    // https://stackoverflow.com/questions/52861086/why-does-minmax0-1fr-work-for-long-elements-while-1fr-doesnt
    // allows content to overflow the track
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: minmax(1rem, 4rem) 1fr;
  }

  header {
    grid-row: 1 / 3;
    max-width: 38rem;
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
      margin-top: 5rem;
      margin-left: 2rem;
      .headline {
        font-size: var(--fz-xl);
        font-weight: bold;
        line-height: 1.3;
        span {
          display: block;
        }
      }
      .sub-headline {
        font-size: var(--fz-subheading);
        margin: 1rem 0 2rem;
      }
    }
  }

  .piano {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    align-self: center;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    height: 80vh;
    transform: rotate(24deg);
    transform-origin: 50% 100%;
    .lid,
    .bed {
      flex-shrink: 0;
    }
    .lid {
      width: 100%;
    }
    .bed {
      width: 80%;
      transform: translateX(5%) rotate(-5deg);
    }
  }
`

type MainProps = {}

const Main: React.FC<MainProps> = ({}) => {
  return (
    <StyledMain>
      <Container>
        <div className="grid">
          <header>
            <h1 id="main">Sid Lee</h1>
            <div className="intro">
              <p className="headline">
                Hi! I am a <span>Web Developer</span>
              </p>
              <p className="sub-headline">
                With a background in music and passion for creativity, I build
                accessible and responsive web applications that offer great
                value and user experience.
              </p>
              <Button>#Open to work!</Button>
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
