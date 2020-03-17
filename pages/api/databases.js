import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  try {
    const { databases } = await req.dbClient.db().admin().listDatabases()
    res.json(databases)
  } catch (err) {
    console.error('ERROR:', err)
    res.json({ error: err })
  }
})

export default handler