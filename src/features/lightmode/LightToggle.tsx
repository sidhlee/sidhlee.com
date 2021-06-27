import styled from "styled-components"
import { THEME_COLORS } from "../../../global-style"
import useTheme from "./useTheme"

const StyledLightToggle = styled.div<{ $isLight: boolean }>`
  height: var(--height-navbar);
  display: flex;
  align-items: center;
  button {
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

    .sun,
    .moon {
      position: absolute;
      display: inline-block;
      line-height: 1;
      top: 3px;
      font-size: 1rem;
    }
    .sun {
      left: 3px;
    }
    .moon {
      right: 1px;
    }

    // circular toggle-switch
    .toggle-switch {
      position: relative;
      z-index: 1;
      display: block;
      background: white;
      --switch-size: 1rem;
      height: var(--switch-size);
      width: var(--switch-size);
      border-radius: 50%;
      /* margin: 3px; */
      margin-left: auto;
      transition: all 250ms ease;
      transform: translateX(
        ${({ $isLight }) =>
          $isLight
            ? "calc(-1 * (var(--toggle-width) - var(--switch-size) - 8px))"
            : 0}
      );
    }
  }
`

type LightToggleProps = {}

const LightToggle: React.FC<LightToggleProps> = ({}) => {
  const { theme, toggleTheme } = useTheme()

  const handleClick = () => {
    toggleTheme()
  }
  return (
    <StyledLightToggle className="LightToggle" $isLight={theme === "light"}>
      <button onClick={handleClick}>
        <span className="visually-hidden">
          {theme === "dark" ? "use light theme" : "use dark theme"}
        </span>
        <span
          className="toggle-switch"
          role="img"
          aria-label="toggle switch"
        ></span>
        <span className="sun" role="img" aria-label="sun">
          ☀️
        </span>
        <span className="moon" role="img" aria-label="moon">
          🌛
        </span>
      </button>
    </StyledLightToggle>
  )
}

export default LightToggle
