import nextConnect from 'next-connect'
import middleware from '../../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { query: { db } } = req
  try {
    const returnArr = []
    const collections = await req.dbClient.db(db).listCollections().toArray()
    for (let i = 0; i < collections.length; i++) {
      const stats = await req.dbClient.db(db).collection(collections[i].name).stats()
      returnArr.push({
        name: collections[i].name,
        uuid: collections[i].info.uuid,
        numOfDocuments: stats.count,
        avgDocSize: stats.avgObjSize,
        totalDocSize: stats.avgObjSize * stats.count,
        numOfIndexes: stats.nindexes,
        totalIndexSize: stats.totalIndexSize,
      })
    }

    res.status(200).json({ collections: returnArr })
  } catch (err) {
    console.error('ERROR:', err)
    res.status(400).json({ error: err })
  }
})

export default handler