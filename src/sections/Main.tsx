import styled from "styled-components"
import PianoLid from "../images/Piano__lid.svg"
import PianoKeybed from "../images/Piano__keybed.svg"

const StyledMain = styled("div")``

type MainProps = {}

const Main: React.FC<MainProps> = ({}) => {
  return (
    <StyledMain>
      <h1>Sid Lee</h1>
      <PianoLid />
      <PianoKeybed />
    </StyledMain>
  )
}

export default Main
