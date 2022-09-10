import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import Detail from './components/Detail'
import List from './components/List'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route element={<Home />} path="/home"></Route>
        <Route element={<List />} path="/list"></Route>
        <Route element={<Detail />} path="/detail"></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
