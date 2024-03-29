import { css } from '@emotion/react'

export const baselineStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');  
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  html,
  body,
  #root {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5;
  }
  html {
    box-sizing: border-box;
    height: 100%;
    text-size-adjust: 100%;
  }
  #__next {
    height: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    width: 100vw;
    height: 100%;
    margin: 0;
    /* overflow-x: hidden;
    overflow-y: hidden; */
    font: 16px/1.5 sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  figure,
  ol,
  ul {
    color: darkslategray;
    padding: 0;
    margin: 0;
  }
  main,
  li {
    display: block;
  }
  /* h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
  } */
  strong {
    font-weight: 700;
  }
  a,
  button {
    color: inherit;
    transition: 0.3s;
    text-decoration: none!important;
  }
  a {
    color: white;
    cursor: pointer;
    text-decoration: none!important;
  }
  a,
  a:hover,
  a:focus,
  a:active,
  a:visited,
  a:link {
    text-decoration: none!important;
    cursor: pointer;
  }
  a:focus-visible {
    color: inherit;
  }
  button {
    overflow: visible;
    font: inherit;
    -webkit-font-smoothing: inherit;
    letter-spacing: inherit;
    cursor: pointer;
    background: none;
    border: 0;
    text-decoration: none;
  }
  ::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  :focus {
    outline: 0;
  }
  img {
    height: auto;
    max-width: 100%;
    border: 0;
  }
  input {
    border: none;
  }
`