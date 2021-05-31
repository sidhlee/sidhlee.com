import styled, { css } from "styled-components"

type ButtonSize = "sm" | "md" | "lg" | undefined

const getSize = (size: ButtonSize) => {
  switch (size) {
    case "sm":
      return "0.85rem"
    case "md":
      return "1rem"
    case "lg":
      return "1.25rem"
    default:
      return "1rem"
  }
}

export type ButtonProps = {
  $sm?: boolean
  $lg?: boolean
  $size?: ButtonSize
  $outline?: boolean
  $secondary?: boolean
}

const secondaryCss = css`
  background: var(--cl-projects);
  border: 2px solid var(--cl-projects);
`

const outlineCss = css`
  background: transparent;
  border: 2px solid currentColor;
`

export const buttonCss = css<ButtonProps>`
  display: inline-block;
  padding: 0.4em 1.2em;
  background: var(--cl-about);
  border: 2px solid var(--cl-about);
  color: var(--text-main);
  font-family: var(--ff-heading);
  /* font-size: ${props => (props.$sm ? "0.85rem" : "1rem")}; */
  font-size: ${({ $size }) => getSize($size)};
  font-weight: bold;
  text-transform: uppercase;
  margin: 0.5rem;

  svg,
  span {
    vertical-align: middle;
    display: inline-block;
    &:first-child {
      margin-right: 0.5em;
    }
  }

  ${props => (props.$outline ? outlineCss : null)}
  ${props => (props.$secondary ? secondaryCss : null)}
`

export const StyledButton = styled("button")<ButtonProps>`
  ${buttonCss}
`

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button
