import { quicktub } from "./quicktub";
import { middletub } from "./middletub";
import { slowtub } from "./slowtub";

let time1 = Date.now()
let tub_sonlar = quicktub(1_000_000)
let time2 = Date.now()


console.log(tub_sonlar)
console.log(time2-time1)