const {quicktub, midtub, slowtub} = require("./src/tub");

let time1 = Date.now()
let tub_sonlar = quicktub(10_000_000)
let time2 = Date.now()

console.log(time2-time1)


