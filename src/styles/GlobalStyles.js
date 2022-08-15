import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box
  }
  
  body {
    margin: 0;
    padding: 0;
  }

  h1,h2 {
    margin: 0
  } 

  ul {
    list-style: none;
    padding: 0;
  }
`
