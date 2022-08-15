import { createGlobalStyle } from 'styled-components'
import { font, color } from './styleConfig'
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: ${font.regular};
    color: ${color.secondary}
  }

  h1,h2 {
    margin: 0
  } 

  ul {
    list-style: none;
    padding: 0;
  }
`
