const {quicktub, midtub, slowtub} = require("./src/tub");

let time1 = Date.now()
let tub_sonlar = slowtub(100_000)
let time2 = Date.now()


console.log(tub_sonlar)
console.log(time2-time1)


