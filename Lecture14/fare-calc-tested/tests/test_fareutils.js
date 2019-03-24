const { expect } = require('chai')
const { calcFare } = require('../fareutils')

describe('fare util tests', ()  => {


  it('verifies fare is 25  for 0km,  0min', () => {

    let fare = calcFare(0, 0)

    expect(fare).to.equal(25)

  })

  it('verifies fare is 33  for 3km,  0min', () => {

    let fare = calcFare(3, 0)

    expect(fare).to.equal(33)

  })


})
