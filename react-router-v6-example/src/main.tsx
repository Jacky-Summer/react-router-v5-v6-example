import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import Detail from './components/Detail'
import List from './components/List'
import Category from './components/Category'
import CategoryA from './components/CategoryA'
import CategoryB from './components/CategoryB'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route element={<Home />} path="/home"></Route>
        <Route element={<List />} path="/list"></Route>
        <Route element={<Detail />} path="/detail"></Route>
        <Route element={<Category />} path="category">
          {/* children 写法嵌套子路由，path是相对路径 */}
          <Route element={<CategoryA />} path="a"></Route>
          <Route element={<CategoryB />} path="b"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
