import { useRoutes } from 'react-router-dom'
import Home from './components/Home'
import List from './components/List'

// test useRoutes
function App() {
  const element = useRoutes([
    { path: '/home', element: <Home /> },
    { path: '/list', element: <List /> },
  ])

  return element
}

export default App
