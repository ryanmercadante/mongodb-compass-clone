import Link from 'next/link'
import { Fragment } from 'react'

const CollectionItem = ({ name, numOfDocuments, avgDocSize, totalDocSize, numOfIndexes, totalIndexSize, db }) => (
  <Fragment>
    <div className='collections'>
      <div className='column'>
        <Link href='/dbs/collections/[doc]' as={`/dbs/collections/${name}?db=${db}`}>
          <h3><a>{name}</a></h3>
        </Link>
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
      a {
        cursor: pointer;
        color: #777;
      }
      a:hover {
        text-decoration: underline;
        color: #333;
      }
    `}</style>
  </Fragment>
)

export default CollectionItem