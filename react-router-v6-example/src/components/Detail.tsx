import { useParams, useSearchParams } from 'react-router-dom'

export default function Detail() {
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  console.log('params', params)
  console.log('getParams', searchParams.get('name'))
  return (
    <div
      onClick={() => {
        setSearchParams({ name: 'jacky' })
      }}
    >
      当前页面：Detail 点我设置url查询参数为name=jacky
    </div>
  )
}
