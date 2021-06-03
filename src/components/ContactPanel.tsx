import { useState } from "react"
import styled from "styled-components"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { FaTimes } from "react-icons/fa"
import { useTransition, animated } from "react-spring"

const StyledContactPanel = styled("div")`
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
    top: 0.5em;
    right: 0.5em;
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

const AnimatedStyledContactPanel = animated(StyledContactPanel)

type ContactPanelProps = {
  type: "email" | "phone" | ""
  close: () => void
}

const ContactPanel: React.FC<ContactPanelProps> = ({ type, close }) => {
  const [isCopied, setIsCopied] = useState(false)

  const isOpen = type !== ""

  const transition = useTransition(isOpen, {
    key: isOpen,
    from: {
      scale: 0,
      opacity: 0,
    },
    enter: {
      scale: 1,
      opacity: 1,
    },
    leave: {
      scale: 0,
      opacity: 0,
    },
    config: {
      mass: 0.7,
      friction: 18,
      tension: 200,
    },
    expires: 0,
  })

  const content =
    type === "email" ? (
      <div>
        <p>sidhlee@gmail.com</p>
        <div className="buttons">
          <CopyToClipboard
            text="sidhlee@gmail.com"
            onCopy={() => setIsCopied(true)}
          >
            <button className="btn-panel">
              {isCopied ? "Copied!" : "Copy to clipboard"}
            </button>
          </CopyToClipboard>
          <a className="btn-panel" href="mailto:sidhlee@gmail.com">
            Send Email
          </a>
        </div>
      </div>
    ) : (
      <div>
        <p>Sid Lee Web Developer: 1-647-617-5998</p>
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

  // TODO: fix leave transition not working
  return transition((styles, isOpen) => {
    return isOpen ? (
      <AnimatedStyledContactPanel style={styles}>
        <button className="close-btn" onClick={close}>
          <FaTimes role="img" aria-label="close" />
        </button>
        {content}
      </AnimatedStyledContactPanel>
    ) : null
  })
}

export default ContactPanel
