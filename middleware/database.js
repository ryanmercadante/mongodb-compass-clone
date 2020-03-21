import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'
import { config } from '../pages/index'

console.log(config.global_hostname)
console.log(config.global_port)

const mongoUri = `mongodb://${config.global_hostname}:${config.global_port}/`

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
    // req.db = client.db('test')
  
    return next()
  } catch (err) {
    console.error('ERROR:', err)
  }
}

const middleware = nextConnect()

middleware.use(database)

export default middleware