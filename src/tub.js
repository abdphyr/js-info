
function quicktub(number) {
  const tubs = []
  for (let i = 2; i < number; i++) {
    let bool = true
    if (i === 2 || i === 3) {
      tubs.push(i)
      continue
    }
    let root = Math.floor(Math.sqrt(i))
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

function midtub(number) {
  const tubs = []
  for (let i = 2; i < number; i++) {
    let bool = true
    if (i === 2 || i === 3) {
      tubs.push(i)
      continue
    }
    let root = Math.floor(Math.sqrt(i))
    for (let j = 2; j <= root; j++) {
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

function slowtub(number) {
  const tubs = []
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

module.exports.quicktub = quicktub 
module.exports.midtub = midtub 
module.exports.slowtub = slowtub 
