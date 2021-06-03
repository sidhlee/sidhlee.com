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
    width: 100%;
    min-height: var(--section-content-min-height);
    // can't use padding to align vertically because piano is absolute against the container border, not padding
    display: flex;
    align-items: center;
  }

  .main-content-inner {
    width: 100%;
    position: relative;
    bottom: 10vh;
  }

  header {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* max-width: 38rem; */
    // https://css-tricks.com/hash-tag-links-padding/
    // fix h1 hidden behind navbar when navigated
    h1::before {
      display: block;
      content: " ";
      margin-top: calc(var(--py) * -1);
      height: var(--py);
      visibility: hidden;
      pointer-events: none;
    }
  }

  .intro {
    // put text over piano
    position: relative;
    z-index: 1;

    padding-top: var(--pt-section-content);
    margin-left: min(max(0px, 2vw), 2rem);
    .headline {
      line-height: 1.2;
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

  .piano {
    position: absolute;
    left: 50%;
    top: -1.5vh;
    --size: max(300px, 40vw);
    width: var(--size);
    height: calc(var(--size) * 1.3);
    transform: rotate(24deg);
    transform-origin: 60% 100%;
    /* prevent low contrast when piano goes under text  */
    filter: brightness(0.35);
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
      height: 60%;
      position: relative;
      margin-top: calc(-1 * 30%);
      left: 2rem;
      transform: rotate(-5deg);
    }
  }
  @media (min-width: 1000px) {
    .piano {
      filter: initial;
    }
  }
`

type MainProps = {}

const Main: React.FC<MainProps> = ({}) => {
  return (
    <StyledMain id="main">
      <Container>
        <header>
          <h1>Sid Lee</h1>
          <div className="main-content">
            <div className="main-content-inner">
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
              <div className="piano">
                <PianoLid className="lid" />
                <PianoKeybed className="bed" />
              </div>
            </div>
          </div>
        </header>
      </Container>
    </StyledMain>
  )
}

export default Main
