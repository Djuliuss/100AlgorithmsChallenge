export function allLongestStrings(inputArray: string[]): string[] {
  const inputsByLength: { [length: string]: string[] } = {};
  inputArray.forEach((input) => {
    const length = input.length.toString();
    inputsByLength[length] = inputsByLength[length] || [];
    inputsByLength[length].push(input);
  });
  const maxLength = Object.keys(inputsByLength).reduce((max, el) => (max > el ? max : el));
  return inputsByLength[maxLength];
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
