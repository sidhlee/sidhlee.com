import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { buttonCss, ButtonProps, SectionTheme } from "./Button"
import { Link } from "gatsby"

const getBackgroundCss = (theme: SectionTheme | undefined) => {
  switch (theme) {
    case "main":
      return "var(--cl-main-light)"
    case "about":
      return "var(--cl-about-dark)"
    case "projects":
      return "black"
    case "skills":
      return "black"
    default:
      return "transparent"
  }
}

const StyledLink = styled(Link)`
  ${buttonCss}
  .link-text {
    position: relative;
    z-index: 100;
    display: flex;
    align-items: center;
  }
  .link-bg {
    display: inline-block;
    position: absolute;
    z-index: 50;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ $theme }) => getBackgroundCss($theme)};
    transform-origin: left;
  }
`

// styled components need to be wrapped inside spring component
// https://github.com/pmndrs/react-spring/discussions/872

interface ButtonLinkProps extends ButtonProps {
  to?: string
  href?: string
  download?: boolean
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  to,
  href,
  $sm,
  $outline,
  $size,
  $theme,
  download,
}) => {
  const [{ scale, scaleX, transformOrigin }, api] = useSpring(() => ({
    scaleX: 0,
    scale: 1,
    transformOrigin: "left",
    config: {
      tension: 200,
      mass: 0.9,
    },
  }))

  const handleMouseEnter = () => {
    api.start({
      scaleX: 1,
      scale: 1.05,
      transformOrigin: "left",
    })
  }

  const handleMouseLeave = () => {
    api.start({ scaleX: 0, scale: 1, transformOrigin: "right" })
  }

  let buttonLink
  if (to) {
    buttonLink = (
      <StyledLink
        to={to}
        $sm={$sm}
        $outline={$outline}
        $size={$size}
        $theme={$theme}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <animated.span className="link-text" style={{ scale }}>
          {children}
        </animated.span>
        <animated.span
          className="link-bg"
          style={{ scaleX, transformOrigin }}
        ></animated.span>
      </StyledLink>
    )
  } else if (href) {
    buttonLink = (
      <StyledLink
        as="a"
        href={href}
        target="_blank"
        rel="noreferrer"
        download={download}
        $outline={$outline}
        $size={$size}
        $theme={$theme}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <animated.span className="link-text" style={{ scale }}>
          {children}
        </animated.span>
        <animated.span
          className="link-bg"
          style={{ scaleX, transformOrigin }}
        ></animated.span>
      </StyledLink>
    )
  } else {
    throw new Error("ButtonLink must have either to or href prop")
  }
  return buttonLink
}

export default ButtonLink
