import { ChangeEvent } from "react"
import styled from "styled-components"
import { mq, THEME_COLORS } from "../../../global-style"
import useTheme, { setCustomProperties } from "./useTheme"

const StyledLightToggle = styled.div<{ $isLight: boolean }>`
  height: var(--height-navbar);
  display: flex;
  align-items: center;
  label {
    position: relative;
    display: flex;
    --toggle-width: 2.9rem;
    width: var(--toggle-width);
    padding: 2px;
    border: 2px solid;
    border-color: ${({ $isLight }) =>
      $isLight ? THEME_COLORS.dark["--cl-main"] : "white"};
    background: ${({ $isLight }) =>
      $isLight ? THEME_COLORS.dark["--cl-main"] : "transparent"};
    border-radius: 100vmax;
    cursor: pointer;

    /* 
    because .sr-only is turned off on "focus" and "active" state, 
    we couldn't add that class to the radio inputs.
    Instead, we are directly applying all those rules to the input element here
    so that it stays that way the whole time.
    */
    input {
      overflow: hidden; // remove scroll, remove overflown
      white-space: nowrap; // prevent wrapping (might create height)

      // clip only applies to abs-positioned elements (abs|fixed)
      position: absolute; // for clip to work
      clip: rect(0 0 0 0); // clips instead of removing by hidden
      clip-path: inset(50%); // works same as above, but more browser support

      // clip fallback
      height: 1px; // almost-remove (but don't)
      width: 1px;
    }
    .sun,
    .moon {
      position: absolute;
      display: inline-block;
      line-height: 1;
      top: 3px;
    }
    .sun {
      left: 3px;
    }
    .moon {
      right: 3px;
    }

    // circular toggle-switch
    .toggle-switch {
      position: relative;
      z-index: var(--z-nav-menu);
      display: block;
      background: white;
      --switch-size: 1rem;
      height: var(--switch-size);
      width: var(--switch-size);
      border-radius: 50%;
      /* margin: 3px; */
      margin-left: auto;
      transition: all 250ms ease;
    }
    input#lightToggle:checked ~ .toggle-switch {
      transform: translateX(
        calc(-1 * (var(--toggle-width) - var(--switch-size) - 8px))
      );
    }
  }
`

type LightToggleProps = {}

const LightToggle: React.FC<LightToggleProps> = ({}) => {
  const { theme, setTheme } = useTheme()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedTheme = e.target.checked ? "light" : "dark"
    setTheme(updatedTheme)
    setCustomProperties(updatedTheme, THEME_COLORS)
  }
  return (
    <StyledLightToggle className="LightToggle" $isLight={theme === "light"}>
      <label htmlFor="lightToggle">
        <input id="lightToggle" type="checkbox" onChange={handleChange} />
        <span className="sun" role="img" aria-label="sun">
          ☀️
        </span>
        <span className="moon" role="img" aria-label="moon">
          🌛
        </span>
        <span className="toggle-switch"></span>
      </label>
    </StyledLightToggle>
  )
}

export default LightToggle
