import { ChangeEvent } from "react"
import styled from "styled-components"

const StyledLightToggle = styled.label``

type LightToggleProps = {}

const LightToggle: React.FC<LightToggleProps> = ({}) => {
  const handleChange = (e: ChangeEvent) => {}
  return (
    <StyledLightToggle>
      <input type="checkbox" checked={false} onChange={handleChange} /> Light
    </StyledLightToggle>
  )
}

export default LightToggle
