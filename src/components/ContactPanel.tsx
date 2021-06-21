import { useEffect, useState } from "react"
import styled from "styled-components"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { FaTimes } from "react-icons/fa"
import { useTransition, animated, useSpring } from "react-spring"

const StyledContactPanel = styled(animated.div)`
  position: absolute;
  z-index: 500;

  padding: 1rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--cl-about);

  display: flex;
  flex-direction: column;
  justify-content: center;

  .close-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    svg {
      transition: all 200ms ease;
      opacity: 0.8;
      &:hover {
        opacity: 1;
        transform: scale(1.2);
      }
    }
  }

  p {
    margin-bottom: 0.5em;
  }

  .buttons {
    display: flex;
    flex-direction: column;
  }

  .btn-panel {
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    white-space: nowrap;
    background: var(--cl-projects);
    padding: 0.5em 1em;
    &:not(:last-child) {
      margin-bottom: 0.3em;
    }
  }
`

type ContactPanelProps = {
  type: "email" | "phone" | ""
  close: () => void
}

const ContactPanel: React.FC<ContactPanelProps> = ({ type, close }) => {
  const [isCopied, setIsCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(type !== "")
    setIsCopied(false)
  }, [type])

  const styles = useSpring({
    opacity: isOpen ? 1 : 0,
    scale: isOpen ? 1 : 0,
    config: {
      mass: 0.7,
      friction: 18,
      tension: 200,
    },
  })

  const content =
    type === "email" ? (
      <div>
        <p>sid@sidhlee.com</p>
        <div className="buttons">
          <CopyToClipboard
            text="sidhlee@gmail.com"
            onCopy={() => setIsCopied(true)}
          >
            <button className="btn-panel">
              {isCopied ? "Copied!" : "Copy to clipboard"}
            </button>
          </CopyToClipboard>
          <a className="btn-panel" href="mailto:sid@sidhlee.com">
            Send Email
          </a>
        </div>
      </div>
    ) : (
      <div>
        <p>
          Sid Lee Web Developer: <span className="nowrap">1-647-617-5998</span>{" "}
        </p>
        <div className="buttons">
          <CopyToClipboard
            text="Sid Lee Web Developer: 1-647-617-5998"
            onCopy={() => setIsCopied(true)}
          >
            <button className="btn-panel">
              {isCopied ? "Copied!" : "Copy to clipboard"}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    )

  return (
    <StyledContactPanel style={styles}>
      <button className="close-btn" onClick={close}>
        <FaTimes role="img" aria-label="close" />
      </button>
      {content}
    </StyledContactPanel>
  )
}

export default ContactPanel
