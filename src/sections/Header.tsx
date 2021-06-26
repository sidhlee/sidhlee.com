import styled from "styled-components"
import PianoLid from "../images/piano-lid.svg"
import PianoKeybed from "../images/piano-keybed.svg"
import Container from "../components/Container"
import ButtonLink from "../components/ButtonLink"
import SpringZoom from "../springs/SpringZoom"
import { animated } from "@react-spring/web"
import useHeaderChain from "../springs/useHeaderChain"
import useFlyingPiano from "../springs/useFlyingPiano"
import useDevRole from "../springs/useDevRole"
import useTheme from "../features/lightmode/useTheme"
import { COLORS } from "../../global-style"

const StyledHeader = styled("section")<{ $isLight: boolean }>`
  // Take mobile UI (keyboard/safari control bar) into account when calculating 100vh
  // https://css-tricks.com/css-fix-for-100vh-in-mobile-webkit/
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  .Header-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background-color 200ms ease;
    background-color: var(--cl-main);
  }

  .grid {
    /* min-height: calc(100vh - var(--py) - var(--height-navbar)); */
    // https://stackoverflow.com/questions/52861086/why-does-minmax0-1fr-work-for-long-elements-while-1fr-doesnt
    // allows content to overflow the track
    grid-template-columns: auto minmax(0, 1fr);
    /* grid-template-rows: minmax(1rem, 4rem) auto; */
  }

  .Header-content {
    width: 100%;
    min-height: var(--min-height-section-content);
    // can't use padding to align vertically because piano is absolute against the container border, not padding
    display: flex;
    align-items: center;
  }

  .Header-content-inner {
    width: 100%;
    position: relative;
    /* bottom: 10vh; */
  }

  header {
    position: relative;
    z-index: 1;
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
    .dev-role {
      position: relative;
      height: 1.3em;
      .role {
        display: block; // enable translate
        position: absolute;
      }
    }
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
    cursor: grab;
    position: absolute;
    left: 50%;
    top: -7vh;
    --size: max(300px, 65vh);
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
      path {
        fill: var(--cl-accent);
      }
    }
    .bed {
      width: 80%;
      height: 60%;
      position: relative;
      /* margin-top: calc(-1 * 20%); */
      left: 2rem;
      transform: rotate(-5deg);
      path {
        fill: ${({ $isLight }) => ($isLight ? "black" : "white")};
      }
    }
  }

  @media (min-width: 1000px) {
    .piano {
      filter: initial;
    }
  }
`

type HeaderProps = {}

const Header: React.FC<HeaderProps> = ({}) => {
  const {
    h1Styles,
    introStyles,
    bgStyles,
    buttonStyles,
    pianoStyles,
  } = useHeaderChain()

  const { theme } = useTheme()

  const { bind, flyingPianoStyles } = useFlyingPiano()

  const role = useDevRole()

  return (
    <StyledHeader $isLight={theme === "light"}>
      <Container>
        <header>
          <animated.h1 style={h1Styles}>Sid Lee</animated.h1>
          <div className="Header-content">
            <div className="Header-content-inner">
              <animated.div className="intro" style={introStyles}>
                <p className="headline heading-xl">
                  <span className="dev-role">{role}</span>
                  <span>Web Developer</span>
                </p>
                <p className="sub-headline">
                  With a background in music and passion for creativity, I build
                  accessible and responsive web applications that offer great
                  value and experience to the user.
                </p>
                <animated.div style={buttonStyles}>
                  <SpringZoom>
                    <ButtonLink to="/#about" $size="lg">
                      #Open to work!
                    </ButtonLink>
                  </SpringZoom>
                </animated.div>
              </animated.div>

              <animated.div style={pianoStyles}>
                <div className="piano">
                  <animated.div
                    {...bind()}
                    style={{
                      transform: "perspective(600px)",
                      ...flyingPianoStyles,
                    }}
                  >
                    <div className="float">
                      <PianoLid
                        className="lid"
                        role="img"
                        aria-label="piano lid"
                      />
                      <PianoKeybed
                        className="bed"
                        role="img"
                        aria-label="piano keybed"
                      />
                    </div>
                  </animated.div>
                </div>
              </animated.div>
            </div>
          </div>
        </header>
      </Container>
      <animated.div className="Header-bg" style={bgStyles}></animated.div>
    </StyledHeader>
  )
}

export default Header
