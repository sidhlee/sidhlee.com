import { useSpring } from "@react-spring/core"
import { animated } from "@react-spring/web"
import styled from "styled-components"
import Backdrop from "./Backdrop"
import NavLinks from "./NavLinks"
import GitHubIcon from "../images/icon-github.svg"
import LinkedInIcon from "../images/icon-linkedin.svg"
import TwitterIcon from "../images/icon-twitter.svg"

const StyledNavMenu = styled(animated.aside)`
  position: fixed;
  z-index: var(--z-nav-menu);
  right: 0;
  top: 0;
  bottom: 0;
  width: 80%;
  max-width: 500px;
  background: var(--cl-about);
  padding: 15vh 5% 5vh;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  align-items: flex-end;
  text-align: right;
  .logo {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
  --fz: min(max(1.8rem, calc(3vw + 3vh)), 3.5rem);
  nav {
    ul {
      height: 40vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      li {
        a {
          display: block;
          font-size: var(--fz);
          padding: 0.4em 0.5rem;
          color: var(--text-muted);
          &.active {
            color: white;
          }
        }
      }
    }
  }

  .social-icons {
    margin-top: auto;
    display: flex;
    li {
      a {
        display: block;
        padding: 0.5rem;

        svg {
          width: var(--fz);
          height: var(--fz);
          border-radius: 2px;
        }
      }
      &.linkedin svg {
        fill: #0072b1;
        background: white;
      }
      &.twitter svg {
        fill: white;
        background: #1da1f2;
      }
      &.github svg {
        fill: black;
        background: white;
      }
    }
  }
`

type NavMenuProps = {
  isOpen: boolean
  close: () => void
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen, close }) => {
  const styles = useSpring({
    opacity: isOpen ? 1 : 0,
    x: isOpen ? "0%" : "100%",
    delay: isOpen ? 140 : 0,
    config: {
      mass: 1,
      friction: 25,
      tension: 220,
    },
  })
  return (
    <>
      <StyledNavMenu style={styles} onClick={close}>
        <span className="heading-xl logo">Sid Lee</span>
        <nav>
          <NavLinks />
        </nav>
        <ul className="social-icons">
          <li className="connect-item linkedin">
            <a
              href="https://www.linkedin.com/in/sid-hayoun-lee/"
              target="_blank"
            >
              <LinkedInIcon aria-label="LinkedIn" />
            </a>
          </li>
          <li className="connect-item twitter">
            <a href="https://twitter.com/sidhlee" target="_blank">
              <TwitterIcon aria-label="Twitter" />
            </a>
          </li>
          <li className="connect-item github">
            <a href="https://github.com/sidhlee/" target="_blank">
              <GitHubIcon aria-label="GitHub" />
            </a>
          </li>
        </ul>
      </StyledNavMenu>
      <Backdrop isOpen={isOpen} close={close} />
    </>
  )
}

export default NavMenu
