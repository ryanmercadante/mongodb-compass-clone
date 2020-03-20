import nextConnect from 'next-connect'
import middleware from '../../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { query: { collection, db } } = req

  try {
    const documents = await req.dbClient.db(db).collection(collection).find().toArray()

    res.status(200).json({ documents })
  } catch (err) {
    res.status(400).json({ error: err })
  }
})

export default handler