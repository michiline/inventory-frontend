import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: min-content;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    box-sizing: border-box;
    height: 100%;
    min-height: 100%;
    scroll-behaviour: smooth;
  }
  #root {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    font-family: Helvetica;
  }
`

export default GlobalStyle
