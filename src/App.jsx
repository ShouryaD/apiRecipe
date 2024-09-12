import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Receipe from './components/Receipe'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import ViewReceipe from './components/ViewReceipe';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Receipe />} />
        <Route path='/view' element={<ViewReceipe />} />

      </Routes>
    </BrowserRouter>
  )
}
