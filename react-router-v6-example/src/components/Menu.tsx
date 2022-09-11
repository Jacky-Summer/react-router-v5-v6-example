import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
      <div>
        <Link to="/home">跳转 Home</Link>
      </div>
      <div>
        <Link to="/detail">跳转 Detail</Link>
      </div>
      <div>
        <Link to="/list">跳转 List</Link>
      </div>
      <div>
        <Link to="/category">跳转 Category 主页面</Link>
      </div>
    </div>
  )
}
