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
    --cl-main-light: #095199;
    --cl-about: #163666;
    --cl-about-dark: #0f2546;
    --cl-projects: #202020;
    --cl-projects-light: #292929;
    --cl-skills: #333533;
    --cl-skills-dark: #252725;

    --cl-contact: var(--cl-main);
    --cl-accent: #fdd835;

    --text-main: var(--cl-off-white);
    --text-muted: #ababab;

    --border-radius: 4px;

    --ff-heading: Poppins, sans-serif;
    --ff-body: Roboto, sans-serif;
    --fz-xl: min(max(2.5rem, calc(15vw - 20px)), 4.25rem);
    --fz-h3: 1.7rem;
    --fz-subheading: min(max(1.1rem, 4vw), 1.2rem);
    --fz-button-md: min(max(0.8rem, 3vw), 1rem);

    --shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    --height-navbar: 4em;
    --px: Min(Max(0.5rem, 6vw), 4rem);
    /* --py: Min(Max(var(--height-navbar), 5vw), 3rem); */
    --py: Min(Max(2rem, 6vw), 4rem);
    --max-width-container: 1700px;
    --mt-section-content: min(max(0.75rem, 2vw), 2rem);

    --z-navbar: 1000;
    --z-backdrop: 1200;
    --z-menu-modal: 1500;

    --timing-spring: cubic-bezier(0.17, 0.67, 0.37, 1.14);
  }

  html {
    box-sizing: border-box;
    // Take mobile UI (keyboard/safari control bar) into account when calculating 100vh
    // https://css-tricks.com/css-fix-for-100vh-in-mobile-webkit/
    height: -webkit-fill-available;
    font-size: 125%; // 20px
    scroll-behavior: smooth;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--cl-projects);
    color: var(--text-main);
    font-family: var(--ff-body);
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

  button {
    background: transparent;
    font: inherit;
    border: 0;
    &,
    span,
    i,
    svg {
      vertical-align: middle;
    }
  }

  input,
  textarea {
    display: block;
    font: inherit;
    padding: 0.5em 1em;
    border-radius: var(--border-radius);
  }

  .visually-hidden:not(:focus):not(:active) {
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

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @keyframes fade-in-up {
    // TODO: is "blinking" potential accessibility issue?
    0% {
      opacity: 0;
    }
    75% {
      transform: translateY(-12%);
    }
    100% {
      opacity: 1;
      transform: translateY(-12%);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export default createGlobalStyle`
  ${globalStyle}
`
