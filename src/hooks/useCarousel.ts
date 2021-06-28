import { useReducer } from "react"
import { useDrag, useGesture } from "react-use-gesture"

type State = {
  currentSlideIndex: number
  prevSlideIndex: number
  isPlaying: boolean
  /**
   * clicked navigation button to come to the current index instead of clicking next or prev button.
   */
  navigated: boolean
}
type Action =
  | { type: "progress" }
  | { type: "next" }
  | { type: "prev" }
  | { type: "goTo"; payload: number }
  | { type: "play" }
  | { type: "pause" }
type Dispatch = (action: Action) => void

const useCarousel = (slidesLength: number) => {
  const initialState: State = {
    currentSlideIndex: 0,
    prevSlideIndex: 0,
    isPlaying: false,
    navigated: false,
  }

  const carouselReducer = (state: State, action: Action) => {
    switch (action.type) {
      case "progress":
      case "next":
        return {
          ...state,
          currentSlideIndex: (state.currentSlideIndex + 1) % slidesLength,
          prevSlideIndex: state.currentSlideIndex,
          navigated: false,
          isPlaying: action.type === "progress" ? true : false,
        }
      case "prev":
        return {
          ...state,
          currentSlideIndex:
            (state.currentSlideIndex + slidesLength - 1) % slidesLength,
          prevSlideIndex: state.currentSlideIndex,
          navigated: false,
          isPlaying: false,
        }
      case "goTo":
        return {
          ...state,
          currentSlideIndex: action.payload,
          prevSlideIndex: state.currentSlideIndex,
          navigated: true,
          isPlaying: false,
        }
      case "play":
        return {
          ...state,
          isPlaying: true,
        }
      case "pause":
        return {
          ...state,
          isPlaying: false,
        }
      default: {
        throw new Error(`Unhandled action type: ${action!.type}`)
      }
    }
  }

  const [state, dispatch] = useReducer(carouselReducer, initialState)
  const { currentSlideIndex, prevSlideIndex, isPlaying, navigated } = state

  const showNext = () => dispatch({ type: "next" })
  const showPrev = () => dispatch({ type: "prev" })
  const pauseCarousel = () => dispatch({ type: "pause" })
  const playCarousel = () => dispatch({ type: "play" })
  const navigateTo = (slideIndex: number) => {
    if (currentSlideIndex === slideIndex) return
    dispatch({ type: "goTo", payload: slideIndex })
  }

  const getTransform = (phase: "from" | "leave") => {
    const nextClickedFromTail =
      currentSlideIndex === 0 && prevSlideIndex === slidesLength - 1
    const prevClickedFromHead =
      currentSlideIndex === slidesLength - 1 && prevSlideIndex === 0

    const navigatedToTheRight = navigated && currentSlideIndex > prevSlideIndex
    const navigatedToTheLeft = navigated && currentSlideIndex < prevSlideIndex

    const nextButtonClicked =
      !navigated &&
      (currentSlideIndex === prevSlideIndex + 1 || nextClickedFromTail)
    const prevButtonClicked =
      !navigated &&
      (currentSlideIndex === prevSlideIndex - 1 || prevClickedFromHead)

    const slidToTheLeft = nextButtonClicked || navigatedToTheRight
    const slidToTheRight = prevButtonClicked || navigatedToTheLeft

    if (slidToTheLeft) {
      return `translate3d(${phase === "from" ? "100%" : "-100%"},0,0)`
    }
    if (slidToTheRight) {
      return `translate3d(${phase === "from" ? "-100%" : "100%"},0,0)`
    }

    return "translate3d(0,0,0)"
  }

  const bindDrag = useDrag(
    state => {
      const {
        swipe: [swipeX],
      } = state

      if (swipeX === 1) {
        showPrev()
        return
      }

      if (swipeX === -1) {
        showNext()
        return
      }
    },
    {
      experimental_preventWindowScrollY: true,
      useTouch: true,
      swipeDistance: 30,
      lockDirection: true,
    }
  )

  return {
    currentSlideIndex,
    prevSlideIndex,
    isPlaying,
    navigated,
    showNext,
    showPrev,
    pauseCarousel,
    playCarousel,
    navigateTo,
    getTransform,
    bindDrag,
  }
}

export default useCarousel
