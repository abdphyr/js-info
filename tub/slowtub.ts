/**
 * Berilgan songacha bo'lgan tub sonlar 
 * massivini qaytaradi. Ishlash tezligi 
 * bo'yicha `eng sekini` hisoblanadi
 * @param number - Number
 * @return Array
 */
export function slowtub(number: number) {
  const tubs: number[] = []
  for (let i = 2; i < number; i++) {
    let bool = true
    if (i === 2 || i === 3) {
      tubs.push(i)
      continue
    }
    for (let j = 2; j < i; j++) {
      if(i % j === 0) {
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