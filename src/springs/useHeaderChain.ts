import { useChain, useSpring, useSpringRef } from "react-spring"

export default function useHeaderChain() {
  const h1Ref = useSpringRef()
  const h1Styles = useSpring({
    ref: h1Ref,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  const introRef = useSpringRef()
  const introStyles = useSpring({
    ref: introRef,
    from: {
      scaleY: 0,
    },
    to: {
      scaleY: 1,
    },
  })

  const bgRef = useSpringRef()
  const bgStyles = useSpring({
    ref: bgRef,
    from: {
      x: "-100%",
    },
    to: {
      x: "0%",
    },
    config: {
      mass: 2,
      friction: 35,
      tension: 170,
    },
  })

  const buttonRef = useSpringRef()
  const buttonStyles = useSpring({
    ref: buttonRef,
    from: {
      opacity: 0,
      scale: 1.5,
      x: 0,
      y: 0,
      transformOrigin: "center",
    },
    to: {
      opacity: 1,
      scale: 1,
      transformOrigin: "center",
      x: 0,
      y: 0,
    },
    config: {
      mass: 1,
      friction: 10,
      tension: 170,
    },
  })

  const pianoRef = useSpringRef()
  const pianoStyles = useSpring({
    ref: pianoRef,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      mass: 1.5,
      friction: 30,
      tension: 50,
    },
  })

  useChain(
    [h1Ref, introRef, bgRef, buttonRef, pianoRef],
    // it feels janky if no delay is added at the beginning
    [0.1, 0.3, 0.6, 1.1, 1.6]
  )

  return {
    h1Styles,
    introStyles,
    bgStyles,
    buttonStyles,
    pianoStyles,
  }
}
