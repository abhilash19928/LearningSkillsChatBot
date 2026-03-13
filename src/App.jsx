import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import AppRoutes from './appRoutes'
import { Navbar } from './components/Navbar/navbar'

function App() {


  return (
    <>
    <div className='p-4'>
    <Navbar/>
    <AppRoutes/>
    </div>  
    </>
  )
}

export default App
