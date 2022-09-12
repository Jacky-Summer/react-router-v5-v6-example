import { Link, useNavigate, NavLink } from 'react-router-dom'

export default function Menu() {
  const navigate = useNavigate()

  return (
    <div>
      <div>
        <Link to="/home">跳转 Home</Link>
      </div>
      <div>
        <NavLink to="/detail/1">跳转 Detail</NavLink>
      </div>
      <div>
        <Link to="/list">跳转 List</Link>
      </div>
      <div>
        <Link to="/category">跳转 Category 主页面</Link>
      </div>

      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          navigate('/list')
        }}
      >
        编程式路由跳转list页面
      </div>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          navigate(-1)
        }}
      >
        history.go(-1)
      </div>
    </div>
  )
}
