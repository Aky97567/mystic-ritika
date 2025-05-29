import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global, css } from '@emotion/react'
import { App } from './App'

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  #root {
    min-height: 100vh;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
)
