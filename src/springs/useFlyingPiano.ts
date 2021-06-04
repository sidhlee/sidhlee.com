import { useGesture } from "@use-gesture/react"
import { useSpring } from "@react-spring/web"

export default function useFlyingPiano() {
  const [flyingPianoStyles, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    x: 0,
    y: 0,
    config: { mass: 5, tension: 250, friction: 50 },
  }))

  const bind = useGesture({
    onMove: ({ xy: [px, py] }) =>
      api({
        rotateX: calcX(py),
        rotateY: calcY(px),
        scale: 1.07,
      }),
    onHover: ({ hovering }) =>
      !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
  })

  const calcX = (py: number) => (700 - py) / 20
  const calcY = (px: number) => (px - 1000) / 20

  return {
    bind,
    flyingPianoStyles,
  }
}
