import Layout from '../../../components/Layout'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import fetch from 'isomorphic-unfetch'
import fetcher from '../../../helpers/fetcher'
import Document from '../../../components/Document'


const Documents = ({ data: sidebar }) => {
  const router = useRouter()
  const { collection, db } = router.query
  const { data, error } = useSWR(`/api/documents/${collection}?db=${db}`, fetcher)

  return (
    <Layout data={sidebar}>
      <Fragment>
        <h1>{db}.{collection}</h1>
        <div className="header">
          <div className='column'>        
            <h2>Documents</h2>
          </div>
        </div>
        {data && data.documents.map((doc) => (
          <Document key={doc._id} doc={doc} />
        ))}
        <style jsx>{`
          h1 {
            margin: 2rem;
            font-size: 2.5rem;
          }
          h2 {
            font-size: 2rem;
          }
          .header {
            margin: 2rem;
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-gap: 10px;
            grid-auto-rows: minmax(100px, auto);
            height: 50px;
          }
          .column {
            height: 50px;
          }
          .column:first-child {
            padding-left: 10px;
          }
        `}</style>
      </Fragment>
    </Layout>
  )
}

Documents.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/databases')
  const json = await res.json()
  return { data: json }
}

export default Documents