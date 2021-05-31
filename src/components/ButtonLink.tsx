import styled from "styled-components"
import { buttonCss, ButtonProps } from "./Button"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  ${buttonCss}
`

interface ButtonLinkProps extends ButtonProps {
  to?: string
  href?: string
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  to,
  href,
  $sm,
  $outline,
  $secondary,
  $size,
}) => {
  let buttonLink
  if (to) {
    buttonLink = (
      <StyledLink
        to={to}
        $sm={$sm}
        $outline={$outline}
        $secondary={$secondary}
        $size={$size}
      >
        {children}
      </StyledLink>
    )
  } else if (href) {
    buttonLink = (
      <StyledLink
        as="a"
        href={href}
        target="_blank"
        rel="noreferrer"
        $outline={$outline}
        $secondary={$secondary}
        $size={$size}
      >
        {children}
      </StyledLink>
    )
  } else {
    throw new Error("ButtonLink must have either to or href prop")
  }
  return buttonLink
}

export default ButtonLink
