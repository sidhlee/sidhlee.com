import { ChangeEvent } from "react"
import styled from "styled-components"
import { THEME_COLORS } from "../../../global-style"
import useTheme, { setCustomProperties } from "./useTheme"

const StyledLightToggle = styled.div`
  height: var(--height-navbar);
  label {
    display: flex;
  }
`

type LightToggleProps = {}

const LightToggle: React.FC<LightToggleProps> = ({}) => {
  const { theme, setTheme } = useTheme()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedTheme = e.target.checked ? "light" : "dark"
    setTheme(updatedTheme)
    console.log(updatedTheme)
    setCustomProperties(updatedTheme, THEME_COLORS)
  }
  return (
    <StyledLightToggle>
      <label htmlFor="lightToggle">
        <input id="lightToggle" type="checkbox" onChange={handleChange} /> Light
      </label>
    </StyledLightToggle>
  )
}

export default LightToggle
