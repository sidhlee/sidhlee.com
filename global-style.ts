import { createGlobalStyle } from "styled-components"

export const mq = {
  landscape: 500,
  tablet: 700,
  desktop: 1130,
  wide: 1600,
}

export default createGlobalStyle`
  body {
    background-color: #333;
  }
`
