import { animated, useTransition } from "@react-spring/web"
import styled from "styled-components"
import Backdrop from "../../components/Backdrop"
import GitHubIcon from "../../images/icon-github.svg"
import LinkedInIcon from "../../images/icon-linkedin.svg"
import TwitterIcon from "../../images/icon-twitter.svg"
import LightToggle from "../lightmode/LightToggle"
import { THEME_COLORS } from "../../../global-style"

const StyledNavMenu = styled(animated.aside)`
  position: fixed;
  z-index: var(--z-nav-menu);
  right: 0;
  top: 0;
  bottom: 0;
  width: 80%;
  max-width: 500px;
  background: var(--cl-about);
  padding: 3rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  .logo {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
  --fz: 5.5vh;
  nav {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    ul {
      /* height: 40vh; */
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      li {
        width: fit-content;
        a {
          display: block;
          font-size: var(--fz);
          padding: 0.4rem 0.5rem;
          color: var(--text-main);
          &.active {
            &::after {
              content: "";
              display: block;
              width: 100%;
              height: 0.1em;
              background: var(--cl-accent);
            }
          }
        }
      }
    }
  }

  .social-icons {
    margin-top: 2rem;
    display: flex;
    li {
      margin: 0.5rem;
      a {
        display: block;
        --icon-size: calc(var(--fz) * 1.25);
        --icon-size: 7vh;
        width: var(--icon-size);
        height: var(--icon-size);
        svg {
          display: block;
          width: 100%;
          height: 100%;
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
  .LightToggle {
    margin-top: 1em;
    padding: 0.5rem;
  }
`

type NavMenuProps = {
  isOpen: boolean
  close: () => void
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen, children, close }) => {
  const transitions = useTransition(isOpen, {
    from: {
      opacity: 0,
      x: "50%",
    },
    enter: {
      opacity: 1,
      x: "0%",
      delay: 100,
    },
    leave: {
      opacity: 0,
      x: "50%",
    },
    config: {
      mass: 1,
      friction: 25,
      tension: 220,
    },
  })

  return (
    <>
      {transitions((styles, item) =>
        item ? (
          <StyledNavMenu style={styles}>
            <span className="heading-xl logo">SL</span>
            <nav onClick={close}>{children}</nav>
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
            <LightToggle />
          </StyledNavMenu>
        ) : null
      )}
      <Backdrop isOpen={isOpen} close={close} />
    </>
  )
}

export default NavMenu
