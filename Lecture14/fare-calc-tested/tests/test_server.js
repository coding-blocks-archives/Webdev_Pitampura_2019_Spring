const { app } = require('../server')
const axios = require('axios')
const { expect } = require('chai')


const  BASE_URL =  'http://localhost:4333'

let server;
before(() => {
  server = app.listen(4333)
})

describe('server tests', () => {

  it('should return 25  for 0, 0', (done) => {

    axios.post(`${BASE_URL}/calc`, {
      km:  0, min: 0
    }).then((response) => {
      expect(response.data.fare).to.equal(25)
      done()
    }).catch(done)

  })

  it('should have error for non numerical data', (done) => {

    axios.post(`${BASE_URL}/calc`, {
      km:  '0', min: '0'
    }).then((response) => {
      done()
    }).catch((err) => {
      expect(err.response.status).to.equal(400)
      done()
    })

  })
})


after(() => {
  server.close()
})
