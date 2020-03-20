import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import useSWR from 'swr'
import CollectionItem from '../../components/CollectionItem'
import CollectionHeader from '../../components/CollectionHeader'
import fetcher from '../../helpers/fetcher'

const Collections = ({ data }) => {
  const router = useRouter()
  const db = router.query.name
  const { data: collectionData, error } = useSWR(`/api/collections/${db}`, fetcher)

  return (
    <Layout data={data}>
      <CollectionHeader />
      {collectionData && collectionData.collections.map((collection) => (
        <CollectionItem key={collection.uuid} {...collection} db={db} />
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