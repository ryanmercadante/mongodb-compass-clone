import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

const Collections = ({ data }) => {
  const router = useRouter()

  return (
    <Layout data={data}>
      {router.query.name}
      testing
    </Layout>
  )
}

Collections.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/databases')
  const json = await res.json()
  return { data: json }
}

export default Collections