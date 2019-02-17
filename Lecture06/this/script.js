function tellThis() {
  return this
}


console.log(tellThis())

let whatIsThis = () => {
  return this
}

let obj = {
  t1: tellThis(),
  t2: tellThis,
  t3: function () {
    return tellThis()
  },
  t4: function () {
    return obj.t2()
  },
  t5: function () {
    return this
  }
}

let obj2 = {
  t1: whatIsThis,
  t2: () => this
}

obj2.t3 = () => this
obj2.t4 = this
