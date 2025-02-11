import React from 'react'
import logo from './logo.svg'
import './app.css'
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
        >Learn React</a>
      </header>
      <Button type="primary">Primary Button</Button>
    </div>
  )
}

export default App