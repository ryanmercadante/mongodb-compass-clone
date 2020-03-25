import Layout from '../../../components/Layout'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import fetch from 'isomorphic-unfetch'
import fetcher from '../../../helpers/fetcher'
import Document from '../../../components/Document'


const Documents = ({ dbs }) => {
  const router = useRouter()
  const { collection, db } = router.query
  const { data, error } = useSWR(`/api/documents/${collection}?db=${db}`, fetcher)

  return (
    <Layout dbs={dbs}>
      <div className='m-8'>
        <h1 className='text-4xl mb-8'>{db}.{collection}</h1>       
        <h2 className='text-3xl mx-16'>Documents</h2>
        {data && data.documents.map((doc) => (
          <Document key={doc._id} doc={doc} />
        ))}
      </div>
    </Layout>
  )
}

export default Documents