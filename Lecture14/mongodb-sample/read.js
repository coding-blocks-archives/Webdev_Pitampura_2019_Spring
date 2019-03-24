const { MongoClient } = require('mongodb')

const DB_URL = "mongodb://localhost:27017"


MongoClient.connect(DB_URL, (err, client) => {
  if (err) throw err

  // console.log(client)

  const mydb = client.db('mydb')
  const products = mydb.collection('products')

  products.find({
    // vendor: 'Apple'
    // price: {$gt: 100000}
    $or: [
      {vendor: 'Apple'},
      {price: {$gt: 100000}}
    ]
  }).toArray((err, results) => {

    if (err) throw err

    console.log(results)
  })

})
