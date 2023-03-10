export function addTwoDigits(n: any): number {
  return n
    .toString()
    .split()
    .reduce((acc, el) => (acc += Number(el)));
}

console.log(addTwoDigits(29));
