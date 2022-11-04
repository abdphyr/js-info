/**
 * Berigan sonning kvadrat ildizini butun 
 *  qismini qaytarib beradi
 * @param i - Number
 * @return Number
 */
export function tubsqrt(i: number) {
  let kvroot = i ** (0.5)
  let lengthOfWhole = Number(kvroot.toString().indexOf("."))
  let floorRoot = Number(kvroot.toString().slice(0, lengthOfWhole > 0 ? lengthOfWhole : kvroot))
  return floorRoot
}