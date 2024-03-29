import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from 'resources/theme'
import { App } from './App'

import 'normalize.css'

function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "DM Sans", sans-serif ;
  }

  button {
    all: unset;
  }
`

export { Root }
