import styled, { css } from "styled-components"
import { mq } from "../../global-style"

const closeButtonCss = css`
  &::before {
    transform: rotate(-45deg) translate(-7px, 7px);
  }
  span {
    transform: rotate(45deg);
    width: 100%;
  }
  &::after {
    opacity: 0;
  }
`

const StyledMenuButton = styled("button")<{ $isMenuOpen: boolean }>`
  position: fixed;
  z-index: var(--z-menu-button);
  right: var(--px);
  top: var(--px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 40px;
  height: 32px;
  padding: 5px;
  margin-left: 1rem;

  span,
  &::before,
  &::after {
    content: "";
    display: block;
    height: 3px;
    background: var(--text-main);
    transition: all 300ms ease;
  }

  &::before {
    width: 100%;
  }
  span {
    width: 75%;
  }
  &::after {
    width: 50%;
  }

  @media (min-width: ${mq.desktop}px) {
    display: none;
  }

  ${({ $isMenuOpen }) => ($isMenuOpen ? closeButtonCss : null)}
`

type MenuButtonProps = {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const MenuButton: React.FC<MenuButtonProps> = ({ toggleMenu, isMenuOpen }) => {
  return (
    <StyledMenuButton onClick={toggleMenu} $isMenuOpen={isMenuOpen}>
      <span role="img" aria-label="menu button" className="bar"></span>
    </StyledMenuButton>
  )
}

export default MenuButton
