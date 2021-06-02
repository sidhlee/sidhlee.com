import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const StyledSpringZoom = styled("div")`
  width: fit-content;
`

const AnimatedStyledZoomOnOver = animated(StyledSpringZoom)

type SpringZoomProps = {}

const SpringZoom: React.FC<SpringZoomProps> = ({ children }) => {
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
    <AnimatedStyledZoomOnOver
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseLeave}
    >
      {children}
    </AnimatedStyledZoomOnOver>
  )
}

export default SpringZoom
