export function almostIncreasingSequence(sequence: number[]): boolean {
  let foundElementThatNeedsRemoving = false;
  let response = true;
  for (let index = 1; index < sequence.length; index++) {
    const [current, previous] = [sequence[index], sequence[index - 1]];
    if (current <= previous) {
      if (foundElementThatNeedsRemoving) {
        response = false;
        break;
      } else {
        foundElementThatNeedsRemoving = true;
      }
    }
  }
  return response;
}

// console.log(almostIncreasingSequence([1, 3, 2, 1]))
// console.log(almostIncreasingSequence([1, 3, 2]))
