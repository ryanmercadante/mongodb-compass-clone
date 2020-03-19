import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import useSWR from 'swr'
import { Fragment } from 'react'

const fetcher = async (url) => {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

const CollectionItem = ({ name, numOfDocuments, avgDocSize, totalDocSize, numOfIndexes, totalIndexSize }) => (
  <Fragment>
    <div className='collections'>
      <div className='column'>
        <h3>{name}</h3>
      </div>
      <div className='column'>
        <h3>{numOfDocuments}</h3>
      </div>
      <div className='column'>
        <h3>{avgDocSize} B</h3>
      </div>
      <div className='column'>
        <h3>{totalDocSize} B</h3>
      </div>
      <div className='column'>
        <h3>{numOfIndexes}</h3>
      </div>
      <div className='column'>
        <h3>{totalIndexSize} B</h3>
      </div>
    </div>
    <style jsx>{`
      .collections {
        margin: 0 2rem;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 10px;
        grid-auto-rows: minmax(100px, auto);
        background-color: white;
        border-radius: 5px;
        height: 50px;
        box-shadow: 0 5px 5px #ccc;
      }
      .column {
        height: 50px;
      }
      .column:first-child {
        padding-left: 10px;
      }
    `}</style>
  </Fragment>
)

const Collections = ({ data }) => {
  const router = useRouter()
  const { data: collectionData, error } = useSWR(`/api/collections/${router.query.name}`, fetcher)
  if (collectionData) {
    console.log(collectionData)
  }

  return (
    <Layout data={data}>
      <h1>Collections</h1>
      <button onClick={() => alert('Not implemented yet!')}>Create Collection</button>
      <div className="grid">
        <div className='column'>        
          <h3>Collection Name</h3>
        </div>
        <div className='column'>        
          <h3>Documents</h3>
        </div>
        <div className='column'>        
          <h3>Avg. Document Size</h3>
        </div>
        <div className='column'>        
          <h3>Total Document Size</h3>
        </div>
        <div className='column'>        
          <h3>Num of Indexes</h3>
        </div>
        <div className='column'>        
          <h3>Total Index Size</h3>
        </div>
      </div>
      {collectionData && collectionData.collections.map((collection) => (
        <CollectionItem key={collection.uuid} {...collection} />
      ))}
      <style jsx>{`
        h1 {
          margin: 2rem;
        }

        h3 {
          font-size: 1.3rem;
        }

        button {
          margin-left: 2rem;
        }

        .grid {
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
    </Layout>
  )
}

Collections.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/databases')
  const json = await res.json()
  return { data: json }
}

export default Collections