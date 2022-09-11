import { useParams } from 'react-router-dom'

export default function Detail() {
  const params = useParams()

  console.log('params', params)
  return <div>当前页面：Detail</div>
}
