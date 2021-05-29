import { createGlobalStyle } from "styled-components"

export const mq = {
  landscape: 500,
  tablet: 700,
  desktop: 1130,
  wide: 1600,
}

export default createGlobalStyle`
  :root {
    --cl-white: white;
    --cl-off-white: #EFF1F3;
    --cl-black: black;
    --cl-main: #084887;
    --cl-about: #203E6C;
    --cl-projects: #202020;
    --cl-skills: #333533;
    --cl-contact:var(--cl-main);
    --cl-accent: #FDD835;

    --text-main: var(--cl-off-white);
    --text-muted: #686868;

    --border-radius: 4px;

    --ff-heading: Poppins, sans-serif;
    --ff-body: Roboto, sans-serif;

    --height-navbar: 3em;
    --px: Min(Max(.5rem, 4vw), 2rem);
    --max-width-container: 900px;

    --z-navbar: 1000;
    --z-backdrop: 1200;
    --z-menu-modal: 1500;      
  }

  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 125%;
  }

  body {
    background-color: #333;
    color: var(--text-main);
  }

  h1, h2, h3, p {
    line-height: 1.6;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
  }

  .visuallyHidden:not(:focus):not(:active) { position: absolute; width: 1px; height: 1px; margin: -1px;border: 0;padding: 0;white-space: nowrap;clip-path: inset(100%);clip: rect(00 0 0);overflow: hidden;}

`
