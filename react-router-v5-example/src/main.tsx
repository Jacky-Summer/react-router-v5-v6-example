import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import Detail from './components/Detail'
import List from './components/List'
import Category from './components/Category'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />

      <Switch>
        <Route component={Home} path="/home"></Route>
        <Route component={List} path="/list"></Route>
        <Route component={Detail} path="/detail/:id"></Route>
        <Route component={Category} path="/category"></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
)
