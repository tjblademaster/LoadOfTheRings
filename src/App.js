import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  )
}


