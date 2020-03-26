import Link from 'next/link'

const column = 'text-2xl flex flex-col justify-center pl-2'

const CollectionItem = ({
  name,
  numOfDocuments,
  avgDocSize,
  totalDocSize,
  numOfIndexes,
  totalIndexSize,
  db,
}) => (
  <div className='grid grid-cols-6 gap-3 h-24 rounded-md shadow-lg bg-white mx-10'>
    <div className='text-2xl flex flex-col justify-center pl-4'>
      <Link href='/dbs/collections/[doc]' as={`/dbs/collections/${name}?db=${db}`}>
        <h3><a className='cursor-pointer text-blue-500 hover:text-green-500 hover:underline'>{name}</a></h3>
      </Link>
    </div>
    <div className={column}>
      <h3>{numOfDocuments}</h3>
    </div>
    <div className={column}>
      <h3>{avgDocSize} B</h3>
    </div>
    <div className={column}>
      <h3>{totalDocSize} B</h3>
    </div>
    <div className={column}>
      <h3>{numOfIndexes}</h3>
    </div>
    <div className={column}>
      <h3>{totalIndexSize} B</h3>
    </div>
  </div>
)

export default CollectionItem