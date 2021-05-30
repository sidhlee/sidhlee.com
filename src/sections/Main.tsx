import styled from "styled-components"
import PianoLid from "../images/Piano__lid.svg"
import PianoKeybed from "../images/Piano__keybed.svg"

const StyledMain = styled("div")`
  min-height: 100vh;
  // Take mobile UI (keyboard/safari control bar) into account when calculating 100vh
  // https://css-tricks.com/css-fix-for-100vh-in-mobile-webkit/
  min-height: -webkit-fill-available;
  background-color: var(--cl-main);

  p {
    font-size: var(--fz-subheading);
  }
  .xl {
    font-size: var(--fz-xl);
    font-weight: bold;
  }
`

type MainProps = {}

const Main: React.FC<MainProps> = ({}) => {
  return (
    <StyledMain>
      <h1>Sid Lee</h1>
      <div className="content">
        <p className="xl">Hi! I am a Web Developer</p>
        <p>
          With a background in music and passion for creativity, I build
          accessible and responsive web applications that offer great value and
          user experience.
        </p>
      </div>
      <PianoLid />
      <PianoKeybed />
    </StyledMain>
  )
}

export default Main
