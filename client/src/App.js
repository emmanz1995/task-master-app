import React from 'react'
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    h1, h2, h3, h4, h5, h6, p {
      padding: 0;
      margin: 0;
    }
  }
`

function App() {
  return (
    <div>
      <GlobalStyles />
      {/*<Dashboard />*/}
      <h1>Hello World!</h1>
    </div>
  )
}

export default App
