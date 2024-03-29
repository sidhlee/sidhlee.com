import styled, { css } from "styled-components"

type ButtonSize = "sm" | "md" | "lg" | undefined

const getSize = (size: ButtonSize) => {
  switch (size) {
    case "sm":
      return "0.85rem"
    case "md":
      return "var(--fz-body)"
    case "lg":
      return "var(--fz-subheading)"
    default:
      return "var(--fz-body)"
  }
}

export type SectionTheme = "main" | "about" | "projects" | "skills"

export type ButtonProps = {
  $sm?: boolean
  $lg?: boolean
  $size?: ButtonSize
  $outline?: boolean
  $theme?: SectionTheme
  type?: "button" | "submit" | undefined
  children?: React.ReactNode
}

const outlineCss = css`
  background: transparent;
  border: 2px solid currentColor;
  /* box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 1); */
`

const mainThemeCss = css`
  background: var(--cl-main);
  border: 2px solid var(--cl-main);
`
const aboutThemeCss = css`
  background: var(--cl-about);
  border: 2px solid var(--cl-about);
  &:hover {
    background: var(--cl-about-dark);
    border: 2px solid var(--cl-about-dark);
  }
`
const projectsThemeCss = css`
  background: var(--cl-projects-light);
  border: 2px solid var(--cl-projects-light);
  /* &:hover {
    background: var(--cl-projects);
    border: 2px solid var(--cl-projects);
  } */
`
const skillsThemeCss = css`
  background: var(--cl-skills);
  border: 2px solid var(--cl-skills);
  &:hover {
    background: var(--cl-skills-hover) !important;
  }
`

const getButtonThemeCss = (theme: SectionTheme | undefined) => {
  switch (theme) {
    case "main":
      return mainThemeCss
    case "about":
      return aboutThemeCss
    case "projects":
      return projectsThemeCss
    case "skills":
      return skillsThemeCss
    default:
      return aboutThemeCss
  }
}

export const buttonCss = css<any>`
  position: relative; // for animating nested span
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  min-width: 7rem;
  padding: 0.5em 1.2em;
  /* border: 2px solid var(--cl-about); */
  border: none !important;
  color: var(--text-main);
  font-family: var(--ff-heading);
  /* font-size: ${props => (props.$sm ? "0.85rem" : "1rem")}; */
  font-size: ${({ $size }) => getSize($size)};
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;
  margin: 0.5rem;
  /* box-shadow: 4px 4px 0 0 rgba(255, 255, 255, 0.7); */
  transition: all 250ms ease;

  svg {
    margin-right: 0.5em;
  }

  ${({ $theme }) => getButtonThemeCss($theme)}

  ${props => (props.$outline ? outlineCss : null)}  

  @media(max-width: 500px) {
    margin: 0.25em;
  }
`

export const StyledButton = styled("button")<ButtonProps>`
  ${buttonCss}
`

const Button: React.FC<ButtonProps> = ({ children, type, $theme }) => {
  return (
    <StyledButton type={type} $theme={$theme}>
      <span>{children}</span>
    </StyledButton>
  )
}

export default Button
