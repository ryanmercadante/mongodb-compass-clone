import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import useSWR from 'swr'
import CollectionItem from '../../components/CollectionItem'
import CollectionHeader from '../../components/CollectionHeader'

const fetcher = async (url) => {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

const Collections = ({ data }) => {
  const router = useRouter()
  const { data: collectionData, error } = useSWR(`/api/collections/${router.query.name}`, fetcher)

  return (
    <Layout data={data}>
      <CollectionHeader />
      {collectionData && collectionData.collections.map((collection) => (
        <CollectionItem key={collection.uuid} {...collection} />
      ))}
    </Layout>
  )
}

Collections.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/databases')
  const json = await res.json()
  return { data: json }
}

export default Collections