const { MongoClient } = require('mongodb')

const DB_URL = "mongodb://localhost:27017"

async function read () {
  const client = await  MongoClient.connect(DB_URL)

  const mydb = client.db('mydb')
  const products = mydb.collection('products')

  const query = products.find({
    // vendor: 'Apple'
    // price: {$gt: 100000}
    $or: [
      {vendor: 'Apple'},
      {price: {$gt: 100000}}
    ]
  })

  console.log(await query.toArray())

  client.close()
}

read()


