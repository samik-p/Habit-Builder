import { useState } from 'react'
import './App.css'

import FloatingActionButtonSize from './components/MUI-AddIcon'
import NavTabs from './components/NavTab'
import MenuAppBar from './components/MUI-AppBar'
import OutlinedCard from './components/Card'

function App() {

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
    </>
  )
}

export default App
