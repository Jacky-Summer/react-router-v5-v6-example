import { Link, Outlet } from 'react-router-dom'

export default function Category() {
  return (
    <div>
      <div>
        <Link to="a">跳转 CategoryA</Link>
      </div>
      <div>
        <Link to="b">跳转 CategoryB</Link>
      </div>

      {/* 自动匹配子路由的渲染 */}
      <Outlet />
    </div>
  )
}
