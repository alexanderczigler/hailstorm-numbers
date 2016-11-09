'use strict'

// Using left-pad just for the thrill.
const leftPad = require('left-pad')

// Input. Should be a natural number.
let n = process.argv[2]

if (isNaN(parseInt(n)) || parseInt(n) < 0) {
  console.error('Expecting a natural number')
  process.exit()
}

const tablePad = () => {
  console.log('|------------|------------|')
}

const tableValue = (i, v) => {
  console.log(`| ${leftPad(i, 10)} | ${leftPad(v, 10)} |`)
}

tablePad()
console.log('| Iteration  | Value      |')
tablePad()
tableValue(0, n)

let iterations = 1

while (iterations < 100) {
  if (n % 2) {
    n = 1 + (n * 3)
  } else {
    n = n/2
  }

  tableValue(iterations, n)

  if (n === 1) {
    tablePad()
    process.exit()
  }

  iterations++
}