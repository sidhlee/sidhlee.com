import { useChain, useSpring, useSpringRef } from "react-spring"

export default function useMainChain() {
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
    [0.5, 0.7, 1.2, 1.6, 2]
  )

  return {
    h1Styles,
    introStyles,
    bgStyles,
    buttonStyles,
    pianoStyles,
  }
}
