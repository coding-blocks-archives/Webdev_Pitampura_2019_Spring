module.exports = {
  calcFare(km, min) {
    let fare = 25
    if (km > 2) {
      fare += ((km - 2) * 8)
    }
    if (min > 15) {
      fare += (min - 15)
    }
    return fare
  }
}
