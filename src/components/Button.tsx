import styled, { css } from "styled-components"

type ButtonProps = {
  sm?: boolean
  outline?: boolean
  secondary?: boolean
}

const outlineCss = css`
  background: transparent;
  border: 2px solid currentColor;
`

const StyledButton = styled("button")<ButtonProps>`
  display: inline-block;
  padding: 0.4em 1.2em;
  background: ${props =>
    props.secondary ? "var(--cl-projects" : "var(--cl-about)"};
  border: 2px solid var(--cl-about);
  color: var(--text-main);
  font-family: var(--ff-heading);
  font-size: ${props => (props.sm ? "0.85rem" : "1.6rem")};
  font-weight: bold;
  text-transform: uppercase;
  ${props => (props.outline ? outlineCss : null)}
`

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button
