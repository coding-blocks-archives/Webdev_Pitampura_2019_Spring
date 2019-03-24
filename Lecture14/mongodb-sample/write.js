const { MongoClient } = require('mongodb')

const DB_URL = "mongodb://localhost:27017"


MongoClient.connect(DB_URL, (err, client) => {
  if (err) throw err

  // console.log(client)

  const mydb = client.db('mydb')
  const products = mydb.collection('products')

  products.insertMany([
    {
      name: 'Macbook Pro',
      vendor: 'Apple',
      price: 129999,
      quantity: 20
    },
    {
      name: 'Macbook Air',
      vendor: 'Apple',
      price: 89999,
      quantity: 20
    },
    {
      name: 'XPS 15',
      vendor: 'Dell',
      price: 156999,
      quantity: 30
    },
    {
      name: 'X1 Carbon',
      vendor: 'Lenovo',
      price: 229999,
      quantity: 10
    },
    {
      name: 'Inspiron 4555',
      vendor: 'Dell',
      price: 39999,
      quantity: 40
    },
  ], (err, result) => {
    if(err) throw err

    console.log(result)
  })

})
