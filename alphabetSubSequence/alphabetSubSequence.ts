export function alphabetSubsequence(s: string): boolean {
  let response = true;
  for (let index = 1; index < s.length; index++) {
    const [current, previous] = [s.charAt(index), s.charAt(index - 1)];
    if (current.charCodeAt(0) <= previous.charCodeAt(0)) {
      response = false;
      break;
    }
  }
  return response;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
