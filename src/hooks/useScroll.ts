import { useState, useLayoutEffect, useRef } from "react"
import debounce from "lodash.debounce"

/**
 * Return true on page scroll and wait for given delay to return false
 * @param {number} delay
 */
export default function useScroll(delay = 1000) {
  const [scrolled, setScrolled] = useState(false)

  // create debounced function and store inside ref to be re-used
  const debouncedSetScrolled = useRef(
    debounce(() => {
      setScrolled(false)
    }, delay)
  ).current

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrolled(true)
      // scrolled will be set to false after the given delay from the last scroll event fired
      debouncedSetScrolled()
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrolled
}
