import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { accent, light, textDark, accentGradient } from 'constants/colors'
import '../static/fonts/fontPrimary.css'

export const GlobalStyles = createGlobalStyle`

  ${normalize}

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
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  html {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-feature-settings: "liga", "kern";
    background-color: ${light};
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    overflow-x: hidden!important;
  }
  body {
    color: ${textDark};
    margin: 0;
    overflow-x: hidden!important;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  .flexbox {
    display: flex;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Campton';
  }
  a {
    color: ${accent};
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  strong {
    font-weight: 700;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  button {
    pointer-events: all;
    :active {outline:0;}
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
  .textLeft > span {
    text-align: left;
  }
  .textRight > span {
    text-align: right;
  }
  .textCenter > span {
    text-align: center;
  }
  .textJustify > span {
    text-align: justify;
  }
  .textUppercase > span {
    text-transform: uppercase;
  }
  .textLowercase > span {
    text-transform: lowercase;
  }
  video {
    max-width: 100%;
  }
  pre {
    display: block;
    padding: 2rem;
    margin: 4rem 0;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }
  ::selection {
    background: ${accent};
    color: ${light};
  }
  ::-moz-selection {
    background: ${accent};
    color: ${light};
  }
  [data-scrollbar] {
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0;
  }
  .scrollbar-track-x {
    display: none;
  }
  .scrollbar-track .scrollbar-thumb {
    background: ${accentGradient};
    transition: background linear;
  
  }

  @media (max-width: 450px) and (max-height: 823px) and (orientation: portrait) {
    .scrollbar-track-y, .scrollbar-thumb {
      width: 3px!important;
    }
  }
`
