//Challenge 2/366
//https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

// function squareSum(numbers) {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i] ** 2;
//   }
//   return result;
// }

// console.log(squareSum([1, 2, 3]));

const squareSum = (numbers) => numbers.reduce((a, b) => (a += b ** 2), 0);

console.log(squareSum([1, 2, 3]));

function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}
