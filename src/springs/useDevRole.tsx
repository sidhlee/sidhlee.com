import { useState, useEffect } from "react"
import { useTransition, animated } from "@react-spring/web"

let isFirst = true

export default function useDevRole() {
  const roleTexts = ["Front-end", "Back-end", "Full-stack"]
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    if (isFirst) isFirst = false
    const id = window.setInterval(
      () => setRoleIndex(i => (i + 1) % roleTexts.length),
      5000
    )

    return () => window.clearInterval(id)
  }, [])

  const transitions = useTransition(roleIndex, {
    keys: item => item,
    from: {
      opacity: 0,
      transform: isFirst
        ? "scale(1) translate(0%, 0%)"
        : "scale(4) translate(0%, 0%)",
    },
    enter: item => async (next, cancel) => {
      await next({
        opacity: 1,
        transform: "scale(1) translate(0%, 0%)",
        config: { mass: 1.3, friction: 20, tension: 220 },
      })
      await next({
        opacity: 0,
        transform: "scale(1) translate(100%, 0%)",
        delay: 3400,
        config: { friction: 30, tension: 200 },
      })
    },
    leave: {
      opacity: 0,
      transform: "scale(1) translate(100%, 0%)",
    },
    delay: 200, // delay between transition
  })

  const role = transitions(({ opacity, transform }, item) =>
    item === roleIndex ? (
      <animated.span
        className="role"
        style={{
          opacity,
          transform,
        }}
      >
        {roleTexts[item]}
      </animated.span>
    ) : null
  )

  return role
}
