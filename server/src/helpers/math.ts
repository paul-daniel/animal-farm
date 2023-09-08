/**
 * A method that will sum given numbers
 * @param {number[]} numbers numbers to sum
 * @return {number} sum of numbers
 */
function sum(numbers: number[]): number {
  const initialSumValue = 0
  return numbers.reduce((sum, value) => sum + value, initialSumValue)
}

export { sum }
