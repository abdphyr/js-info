

function addnumberelements(number: number) {
  let sum = 0
  for (let i = 0; i < String(number).length; i++) {
    sum += Number(String(number)[i])
  }
  if (String(sum).length > 1) {
    return addnumberelements(sum)
  }
  return sum
}
