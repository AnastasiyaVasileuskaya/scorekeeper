import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0 auto;
    font-size: 112.5%;
    font-family: sans-serif;
    max-width: 600px;
  }
  
  input,
  button {
    font-size: inherit;
  }

  input {
    padding: 5px;
  }
`
