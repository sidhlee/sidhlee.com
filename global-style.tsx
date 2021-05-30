import { createGlobalStyle, css } from "styled-components"

export const mq = {
  landscape: 500,
  tablet: 700,
  desktop: 1440,
  wide: 1600,
}

// workaround for css not formatting inside createGlobalStyle
// https://github.com/prettier/prettier/pull/9025
const globalStyle = css`
  :root {
    --cl-white: white;
    --cl-off-white: #eff1f3;
    --cl-black: black;
    --cl-main: #084887;
    --cl-about: #193053;
    --cl-projects: #202020;
    --cl-skills: #333533;
    --cl-contact: var(--cl-main);
    --cl-accent: #fdd835;

    --text-main: var(--cl-off-white);
    --text-muted: #686868;

    --border-radius: 4px;

    --ff-heading: Poppins, sans-serif;
    --ff-body: Roboto, sans-serif;
    --fz-xl: 4.25rem;
    --fz-h3: 1.7rem;
    --fz-subheading: 1.4rem;

    --height-navbar: 4em;
    --px: Min(Max(1rem, 6vw), 4rem);
    --py: Min(Max(var(--height-navbar), 5vw), 5rem);
    --max-width-container: 1700px;

    --z-navbar: 1000;
    --z-backdrop: 1200;
    --z-menu-modal: 1500;
  }

  html {
    box-sizing: border-box;
    // Take mobile UI (keyboard/safari control bar) into account when calculating 100vh
    // https://css-tricks.com/css-fix-for-100vh-in-mobile-webkit/
    height: -webkit-fill-available;
    font-size: min(max(100%, 1.25vw), 125%);
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #333;
    color: var(--text-main);
    font-family: var(--ff-body);
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  p {
    line-height: 1.6;
  }

  h1,
  h2 {
    font-family: var(--ff-heading);
    font-size: var(--fz-xl);
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  a,
  button {
    cursor: pointer;
    color: var(---text-main);
  }

  .visuallyHidden:not(:focus):not(:active) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(00 0 0);
    overflow: hidden;
  }

  .heading-xl {
    font-size: var(--fz-xl);
    font-weight: bold;
    line-height: 1.3;
  }

  .heading-sm,
  h3 {
    font-family: var(---ff-body);
    font-size: var(--fz-h3);
    font-weight: bold;
  }
  .text-lg {
    font-size: var(--fz-subheading);
  }

  .grid {
    display: grid;
  }

  .flex {
    display: flex;
  }

  .mt-3 {
    margin-top: 1em;
  }
`

export default createGlobalStyle`
  ${globalStyle}
`
