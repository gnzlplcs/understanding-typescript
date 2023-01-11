function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input')
  // }
  const result = n1 + n2
  if (showResult) {
    console.log(phrase + result)
  }
  return result
}

// type inference: TS understands what type is because the assignment
// when assign con let it's possible to use another type, won't with const
let number1: number
number1 = 5
const number2 = 2.8
const printResult = true
let resultPhrase = 'Result is: '
resultPhrase = 5 // type 'number' is not assignable to type 'string'

add(number1, number2, printResult, resultPhrase)
