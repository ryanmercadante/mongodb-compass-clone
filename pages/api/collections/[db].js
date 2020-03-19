import nextConnect from 'next-connect'
import middleware from '../../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { query: { db } } = req
  try {
    const collections = await req.dbClient.db(db).listCollections().toArray()

    res.status(200).json({ collections })
  } catch (err) {
    console.error('ERROR:', err)
    res.status(400).json({ error: err })
  }
})

export default handler