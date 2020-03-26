import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import useSWR from 'swr'
import CollectionItem from '../../components/CollectionItem'
import CollectionHeader from '../../components/CollectionHeader'
import fetcher from '../../helpers/fetcher'
import fetch from 'isomorphic-unfetch'

const Collections = ({ dbs }) => {
  const router = useRouter()
  const db = router.query.name
  const { data: collectionData, error } = useSWR(`/api/collections/${db}`, fetcher)

  return (
    <Layout dbs={dbs}>
      <CollectionHeader />
      {collectionData && collectionData.collections.map((collection) => (
        <CollectionItem key={collection.uuid} {...collection} db={db} />
      ))}
    </Layout>
  )
}

export default Collections