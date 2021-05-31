import styled from "styled-components"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"

const StyledCarouselNav = styled("div")`
  margin: 2rem auto 0;
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

    span,
    svg {
      width: 100%;
      height: 100%;
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
      box-shadow: 0 0 0px 5px var(--cl-main);
      filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
    }
  }
`

type CarouselNavProps = {
  currentSlideIndex: number
}

const CarouselNav: React.FC<CarouselNavProps> = ({ currentSlideIndex }) => {
  const navButtons = [...Array(3)].map((_, i) => {
    const active = currentSlideIndex === i
    return (
      <li>
        <button className={`nav-button${active ? " active" : ""}`}>
          <span
            role="img"
            aria-label={active ? "current slide" : `show slide ${i + 1}`}
          ></span>
        </button>
      </li>
    )
  })
  return (
    <StyledCarouselNav>
      <button className="prev-button">
        <FaCaretLeft aria-label="previous slide" />
      </button>
      <ul className="nav-buttons">{navButtons}</ul>
      <button className="next-button">
        <FaCaretRight aria-label="next slide" />
      </button>
    </StyledCarouselNav>
  )
}

export default CarouselNav
