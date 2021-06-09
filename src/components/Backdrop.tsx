import styled from "styled-components"

const StyledBackdrop = styled("div")<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: var(--z-backdrop);
  transition: opacity 250ms ease;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
`

type BackdropProps = {
  isOpen: boolean
  close: () => void
}

const Backdrop: React.FC<BackdropProps> = ({ isOpen, close }) => {
  return (
    <StyledBackdrop
      onClick={close}
      $isOpen={isOpen}
      aria-label="close backdrop and overlay"
    />
  )
}

export default Backdrop
