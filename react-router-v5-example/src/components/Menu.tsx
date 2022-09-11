import { Link, useHistory } from 'react-router-dom'

export default function Menu() {
  const history = useHistory()

  return (
    <div>
      <div>
        <Link to="/home">跳转 Home</Link>
      </div>
      <div>
        <Link to="/detail/1">跳转 Detail</Link>
      </div>
      <div>
        <Link to="/list">跳转 List</Link>
      </div>
      <div>
        <Link to="/category">跳转 Category 主页面</Link>
      </div>

      <div>
        Link 组件的 to 属性 `/`
        <Link to="/"></Link>
      </div>

      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          history.push('/list')
        }}
      >
        编程式路由跳转list页面
      </div>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          history.go(-1)
        }}
      >
        history.go(-1)
      </div>
    </div>
  )
}
