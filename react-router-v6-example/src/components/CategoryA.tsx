import { Link } from 'react-router-dom'

export default function CategoryA() {
  return (
    <div>
      <ul>
        <li>当前页面：CategoryA</li>
        <li>当前url：/category/a</li>
        <li>
          {/* /list */}
          <Link to="../../list">跳转到list页面</Link>
        </li>
        <li>
          {/* /category/b */}
          <Link to="../b">跳转到category/b页面</Link>
        </li>
        <li>
          {/* /category/a */}
          <Link to=".">跳转到当前路由</Link>
        </li>
      </ul>
    </div>
  )
}
