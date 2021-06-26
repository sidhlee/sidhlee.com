import styled from "styled-components"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"
import useTheme from "../features/lightmode/useTheme"

const StyledCarouselNav = styled("nav")<{ $isLight: boolean }>`
  position: relative;
  z-index: 500;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* applies to all buttons */
  button {
    --size: 1.2rem;
    width: var(--size);
    height: var(--size);
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: transform 250ms ease;

    span,
    svg {
      width: 100%;
      height: 100%;
      transition: all 250ms ease;
    }
    &:hover {
      filter: brightness(1.2);
      span,
      svg {
        transform: scale(1.2);
      }
    }

    &.carousel-control:active {
      position: relative;
      top: 1px;
      left: 1px;
    }
  }

  /* Carousel dots */
  .nav-buttons {
    display: flex;
    margin: 0 0.5rem;
  }

  .nav-button {
    margin: 0 0.5rem;
    padding: 0.25rem;

    span {
      border-radius: 50%;
      background: var(--text-main);
    }

    &.active span {
      box-shadow: 0 0 0px 5px var(--cl-main-light);
      filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
    }
  }
`

type CarouselNavProps = {
  currentSlideIndex: number
  numberOfSlides: number
  next: () => void
  prev: () => void
  navigateTo: (slideIndex: number) => void
}

const CarouselNav: React.FC<CarouselNavProps> = ({
  currentSlideIndex,
  numberOfSlides,
  next,
  prev,
  navigateTo,
}) => {
  const { theme } = useTheme()

  const navButtons = [...Array(numberOfSlides)].map((_, i) => {
    const active = currentSlideIndex === i
    return (
      <li key={i}>
        <button
          className={`nav-button${active ? " active" : ""}`}
          aria-label={active ? "current slide" : `show slide ${i + 1}`}
          onClick={() => navigateTo(i)}
        >
          <span
            role="img"
            aria-label={active ? "current slide" : `show slide ${i + 1}`}
          ></span>
        </button>
      </li>
    )
  })
  return (
    <StyledCarouselNav className="CarouselNav" $isLight={theme === "light"}>
      <button
        className="carousel-control prev-button"
        aria-label="previous slide"
        onClick={prev}
      >
        <FaCaretLeft role="img" aria-label="previous slide" />
      </button>
      <ul className="nav-buttons">{navButtons}</ul>
      <button
        className="carousel-control next-button"
        aria-label="next slide"
        onClick={next}
      >
        <FaCaretRight role="img" aria-label="next slide" />
      </button>
    </StyledCarouselNav>
  )
}

export default CarouselNav
