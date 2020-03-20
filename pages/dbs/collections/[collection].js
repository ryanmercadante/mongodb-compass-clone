import Layout from '../../../components/Layout'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import fetcher from '../../../helpers/fetcher'

const Document = ({ doc }) => {

  return (
    <Fragment>
      <div className='document'>
        {Object.entries(doc).map(([key, value]) => {
          let newValue = value
          if (typeof (newValue) === 'string' && key !== '_id') {
            newValue = `"${newValue}"`
          }
          if (key === '_id') {
            newValue = `ObjectId("${newValue}")`
          }
          return (
            <Fragment>
              <p className='key'>{key}:&nbsp;
                <span className='value'>{newValue}</span>
              </p>
            </Fragment>
          )
        })}
      </div>
      <style jsx>{`
        .document {
          margin: 1rem 3rem;
          padding: 1.5rem;
          background-color: #fff;
          border-radius: .5rem;
        }
        p {
          margin: 0;
        }
        .key {
          font-weight: 600;
          font-size: 1.3rem;
          display: flex;
        }
        .value {
          font-weight: 400;
          display: flex;
        }
      `}</style>
    </Fragment>
  )
}

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
            <h2>Documents!</h2>
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