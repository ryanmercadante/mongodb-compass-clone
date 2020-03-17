import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'

const mongoUri = 'mongodb://localhost:27017/test'

const client = new MongoClient(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function database(req, res, next) {
  if (!client.isConnected()) {
    await client.connect()
  }

  req.dbClient = client
  req.db = client.db('test')

  return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware