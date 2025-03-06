import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FloatingActionButtonSize from './components/MUI-AddIcon'
import NavTabs from './components/NavTab'
import MenuAppBar from './components/MUI-AppBar'
import OutlinedCard from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="navbar">
        <MenuAppBar></MenuAppBar>
      </div>
      <div id="content">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='task'>
        <OutlinedCard></OutlinedCard>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div id="addButton">
        <FloatingActionButtonSize></FloatingActionButtonSize>
      </div>
    </>
  )
}

export default App
