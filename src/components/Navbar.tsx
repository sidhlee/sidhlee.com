import styled from "styled-components"
import { useSpring, animated } from "@react-spring/web"
import { mq } from "../../global-style"
import useScroll from "../hooks/useScroll"

const StyledNavbar = styled(animated.nav)`
  position: fixed;
  z-index: var(--z-navbar);
  top: 0;
  width: 100%;
  background: transparent;

  ul {
    height: var(--height-navbar);
    padding-bottom: 1em;
    display: none;
    justify-content: flex-end;
    align-items: flex-end;
  }

  a {
    position: relative;
    margin-right: 2em;
    text-transform: uppercase;
    transition: all 300ms ease;
    .link-text {
      display: inline-block;
    }
    transform: translateY(0%);
    opacity: 1;

    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: -4px;
      left: 0;
      background: var(--cl-accent);
      width: 100%;
      height: 1px;
      transform: scaleX(0);
      transform-origin: left;
      opacity: 0;
      transition: transform 200ms ease;
    }

    &:not(.active):hover {
      &::after {
        transform: scaleX(1);
        opacity: 1;
      }
      &:not(.active):hover .link-text {
        animation: fade-in-up 0.8s ease forwards;
      }
    }

    &.active {
      &::after {
        transform: scaleX(1);
        opacity: 0.7;
        background-color: var(--text-main);
      }
    }
  }

  @media (min-width: ${mq.desktop}px) {
    ul {
      display: flex;
    }
  }
`

type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const beingScrolled = useScroll()

  const styles = useSpring({
    opacity: beingScrolled ? 0 : 1,
    config: {
      friction: 27,
    },
  })

  return <StyledNavbar style={styles}>{children}</StyledNavbar>
}

export default Navbar
