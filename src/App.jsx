import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div className=''>
    <Outlet/>
    </div>
  )
}

export default App
