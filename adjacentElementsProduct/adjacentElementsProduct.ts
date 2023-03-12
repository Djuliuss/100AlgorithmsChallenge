// export function adjacentElementsProduct(inputArray: number[]): number {
//   return inputArray.reduce((max, _, index) => {
//     if (index !== inputArray.length) {
//       const product = inputArray[index] * inputArray[index + 1];
//       max = product > max ? product : max;
//     }
//     return max;
//   });
// }

export function adjacentElementsProduct(inputArray: number[]): number {
  return inputArray.reduce((max, _, index) => (inputArray[index] * inputArray[index + 1] > max ? inputArray[index] * inputArray[index + 1] : max));
}

// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
