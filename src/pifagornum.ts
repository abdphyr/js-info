/**
 * Berilgan son eng kichigi bo'lgan `pifagor`
 * sonlari guruxini aniqalb beradi
 * @param num Number
 * @returns String
 */

export function pifagornum(num: number) {
  let kv = num ** 2
  if (num < 3) {
    return "2 dan katta raqam kiriting"
  }
  if (num % 2 === 0) {
    let mid = kv / 4
    return `Pifagor sonlari ${num}|${num ** 2} + ${mid - 1}|${(mid - 1) ** 2} = ${mid + 1}|${(mid + 1) ** 2}`
  } else {
    let mid = (kv - (kv % 2))/2
    return `Pifagor sonlari ${num}|${num **2 } + ${mid}|${mid ** 2} = ${mid + 1}|${(mid + 1) ** 2}`
  }
}