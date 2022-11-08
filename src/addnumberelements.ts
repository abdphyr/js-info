

function addnumberelements(number: number) {
  let sum = 0
  let info = ""
  let numstr = String(number)
  for (let i = 0; i < numstr.length; i++) {
    info += i === 0 ? `${numstr[i]}` : `+${numstr[i]}`
    sum += Number(numstr[i])
  }
  console.log(info + `=${sum}`)
  if (String(sum).length > 1) {
    return addnumberelements(sum)
  }
  return sum
}
