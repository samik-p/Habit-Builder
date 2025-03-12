import { useState } from 'react'
import './App.css'

import FloatingActionButtonSize from './components/MUI-AddIcon'
import NavTabs from './components/NavTab'
import MenuAppBar from './components/MUI-AppBar'
import OutlinedCard from './components/Card'

function App() {
  const [response, setResponse] = useState('')

  const fetchData = () => {
    fetch('http://localhost:8000/test_endpoint/')
      .then(response => response.json())
      .then(data => {
        setResponse(data.message);
      });
  }

  const handleButtonClick = () => {
    fetchData();
  }

  return (
    <>
      <div id="navbar">
        <MenuAppBar></MenuAppBar>
      </div>
      <div id="content">
        <div className='task'>
          <OutlinedCard></OutlinedCard>
        </div>
      </div>
      <div id="addButton">
        <FloatingActionButtonSize></FloatingActionButtonSize>
      </div>

      <h1>Test</h1>
      <button onClick={handleButtonClick}>Submit</button>

      {response &&
        <>
          <h2>Response:</h2>
          {response}
        </>
      }
    </>
  )
}

export default App
