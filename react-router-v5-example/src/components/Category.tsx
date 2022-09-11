import { Switch, Route, Link } from 'react-router-dom'
import CategoryA from './CategoryA'
import CategoryB from './CategoryB'

export default function Category() {
  return (
    <div>
      <div style={{ marginLeft: '16px' }}>
        <div>
          <Link to="/category/a">跳转 CategoryA</Link>
        </div>
        <div>
          <Link to="/category/b">跳转 CategoryB</Link>
        </div>
      </div>

      <Switch>
        <Route component={CategoryA} path="/category/a"></Route>
        <Route component={CategoryB} path="/category/b"></Route>
      </Switch>
    </div>
  )
}
