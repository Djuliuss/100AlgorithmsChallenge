export function absoluteValuesSumMinimization(a: number[]): number {
  const length = a.length;
  const index = length % 2 === 0 ? length / 2 - 1 : Math.floor(length / 2);
  return a[index];
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));

absoluteValuesSumMinimization([3, 2]);
