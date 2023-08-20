import { KeyboardEvent } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const StyledSpringZoom = styled("div")`
  width: fit-content;
`

const AnimatedStyledZoomOnHover = animated(StyledSpringZoom)

type SpringZoomProps = {
  tabindex?: number
  ariaLabel?: string
  children?: React.ReactNode
}

const SpringZoom: React.FC<SpringZoomProps> = ({
  children,
  tabindex,
  ariaLabel,
}) => {
  const [styles, api] = useSpring(() => ({
    scale: 1,
  }))

  const handleMouseEnter = () => {
    api.start({
      scale: 1.1,
      config: { tension: 170, friction: 26 },
    })
  }

  const handleMouseLeave = () => {
    api.start({ scale: 1, config: { mass: 0.7, tension: 180, friction: 5 } })
  }

  return (
    <AnimatedStyledZoomOnHover
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseLeave}
      onKeyDown={(e: KeyboardEvent) => {
        e.preventDefault()
        const keys = [" ", "Enter"]
        if (keys.includes(e.key)) {
          handleMouseLeave()
        }
      }}
      tabIndex={0}
      role="button"
      aria-label="zoom to original size"
    >
      {children}
    </AnimatedStyledZoomOnHover>
  )
}

export default SpringZoom
