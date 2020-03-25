import { Fragment } from "react"

const createCollectionButton = 'text-2xl bg-green-500 text-white hover:bg-green-400 active:bg-green-600 py-2 px-4 rounded-lg ml-10'

const CollectionHeader = () => {
  return (
    <Fragment>
      <h1 className='text-5xl mx-8 mt-8 mb-4'>Collections</h1>
      <button
        className={createCollectionButton}
        onClick={() => alert('Not implemented yet!')}
      >
        Create Collection
      </button>
      <div className="grid grid-cols-6 gap-3 text-2xl h-16 mt-10 mx-10">
        <div className='pl-4'>        
          <h3>Collection Name</h3>
        </div>
        <div>        
          <h3>Documents</h3>
        </div>
        <div>        
          <h3>Avg. Document Size</h3>
        </div>
        <div>        
          <h3>Total Document Size</h3>
        </div>
        <div>        
          <h3>Num of Indexes</h3>
        </div>
        <div>        
          <h3>Total Index Size</h3>
        </div>
      </div>
      <style jsx>{`
      
      
        
      
        .column {
          height: 50px;
        }
      `}</style>
    </Fragment>
  )
}

export default CollectionHeader