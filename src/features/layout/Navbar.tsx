import styled from "styled-components"
import { useSpring, animated } from "@react-spring/web"
import { mq } from "../../../global-style"
import useScroll from "../../hooks/useScroll"
import LightToggle from "../lightmode/LightToggle"

const StyledNavbar = styled.nav<{
  $scrolling: boolean
  $position: "fixed" | "static"
}>`
  position: ${({ $position }) =>
    $position === "fixed" ? "fixed" : "absolute"};

  z-index: var(--z-navbar);
  height: var(--height-navbar);
  top: 0;
  width: 100%;
  padding: 0 var(--px);
  background: transparent;
  display: none;
  justify-content: flex-end;
  align-items: center;
  transition: opacity 200ms ease;
  opacity: ${({ $scrolling }) => ($scrolling ? 0 : 1)};

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
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
      height: 2px;
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
    display: flex;
  }
`

type NavbarProps = {
  position: "fixed" | "static"
  children?: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({ children, position }) => {
  const scrolling = useScroll()

  return (
    <StyledNavbar $scrolling={scrolling} $position={position}>
      {children}
      <LightToggle />
    </StyledNavbar>
  )
}

export default Navbar
