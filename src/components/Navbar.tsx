import { Link } from "gatsby"
import styled from "styled-components"

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
  a {
    margin-right: 2em;
    text-transform: uppercase;
  }
`

type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <StyledNavbar>
      <Link to="#main">Home</Link>
      <Link to="#about">About</Link>
      <Link to="#projects">Projects</Link>
      <Link to="#skills">Skills</Link>
      <Link to="#contact">Contact</Link>
    </StyledNavbar>
  )
}

export default Navbar
