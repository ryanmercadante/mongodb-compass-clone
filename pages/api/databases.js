import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  try {
    // let db = await req.dbAdmin
    let doc = await req.db.collection('users').findOne()
    console.log('database', doc)
  } catch (err) {
    console.error('err:', err)
  }
  res.end('databse')
})

export default handler