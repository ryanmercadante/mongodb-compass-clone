import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'

const mongoUri = `mongodb://localhost:27017/`

const client = new MongoClient(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function database(req, res, next) {
  try {
    if (!client.isConnected()) {
      await client.connect()
    }
  
    req.dbClient = client
  
    return next()
  } catch (err) {
    console.error('ERROR:', err)
  }
}

const middleware = nextConnect()

middleware.use(database)

export default middleware