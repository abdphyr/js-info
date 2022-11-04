import { tubsqrt } from "./tubsqrt"

/**
 * Berilgan songacha bo'lgan tub sonlar 
 * massivini qaytaradi. Ishlash tezligi 
 * bo'yicha `eng tezi` hisoblanadi
 * @param number - Number
 * @return Array
 */
export function quicktub(number: number) {
  const tubs: number[] = []
  for (let i = 2; i < number; i++) {
    let bool = true
    if (i === 2 || i === 3) {
      tubs.push(i)
      continue
    }
    let root = tubsqrt(i)
    for (let tub of tubs) {
      if (tub > root) {
        break
      }
      if(i % tub === 0) {
        bool = false
        break
      }
    }
    if (bool) {
      tubs.push(i)
    }
  }
  return tubs
}