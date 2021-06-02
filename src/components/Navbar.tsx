import { Link } from "gatsby"
import styled from "styled-components"
import { useLocation } from "@reach/router"
import { mq } from "../../global-style"

const StyledNavbar = styled("nav")`
  position: fixed;
  z-index: var(--z-navbar);
  top: 0;
  width: 100%;
  height: var(--height-navbar);
  padding-bottom: 1em;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  background: var(--cl-main);
  background: transparent;
  a {
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

  @media (max-width: 1130px) {
    display: none;
  }
`

type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const { hash } = useLocation()
  console.log(hash)
  const checkActive = (match: string) => (hash === match ? "active" : "")

  return (
    <StyledNavbar>
      <Link to="/#main" className={checkActive("#main")}>
        <span className="link-text">Home</span>
      </Link>
      <Link to="/#about" className={checkActive("#about")}>
        <span className="link-text">About</span>
      </Link>
      <Link to="/#projects" className={checkActive("#projects")}>
        <span className="link-text">Projects</span>
      </Link>
      <Link to="/#skills" className={checkActive("#skills")}>
        <span className="link-text">Skills</span>
      </Link>
      <Link to="/#contact" className={checkActive("#contact")}>
        <span className="link-text">Contact</span>
      </Link>
    </StyledNavbar>
  )
}

export default Navbar
