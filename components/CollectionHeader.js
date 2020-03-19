import { Fragment } from "react"

const CollectionHeader = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default CollectionHeader