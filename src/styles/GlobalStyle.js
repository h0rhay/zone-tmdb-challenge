import { createGlobalStyle } from 'styled-components'
// color: ${props => (props.themeLight ? 'white' : 'black')};

/* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
*/

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --main-bg-color: snow;
    --card-bg-color: snow;
    --text-color: darkslategrey;
    --primary-color: #1a2a6c;
    --secondary-color: #b21f1f;
    --tertiary-color: #fdbb2d;
  }
  html {
    font-size: 100%;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video  {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; */

  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  
  body {
    line-height: 1;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    //background-image: linear-gradient(to right, var(--primary-color) 0%, var(--secondary-color) 100%);
    background: #1a2a6c;
    background-image: linear-gradient(to right, var(--tertiary-color), var(--secondary-color), var(--primary-color));
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  p {margin-bottom: 1rem;}

  h1, h2 {
    font-family: "Passion One", sans-serif;
    font-weight: 400;
    line-height: 1.1;
  }

  h3, h4, h5 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    line-height: 1.1;
  }

  h1 {
    margin-top: 0;
    font-size: 2.488rem;
  }

  h2 {font-size: 2.074rem;}

  h3 {font-size: 1.728rem;}

  h4 {font-size: 1.44rem;}

  h5 {font-size: 1.2rem;}

  small, .text_small {font-size: 0.833rem;}
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  img {
    max-width:100%;
  }
  header, main, footer {
    width:100%;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 90vw;
    margin: 0 auto;
  }
  a {
    color: var(--primary-color);
    text-decoration: none;
  }
`

export default GlobalStyle