

function addnumberelements(number: number) {
  let sum = 0
  for (let n of String(number)) {
    sum += Number(n)
  }
  if (String(sum).length > 1) {
    return addnumberelements(sum)
  }
  return sum
}