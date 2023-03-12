export function alphabeticShift(inputString: string): string {
  return inputString.split("").map(nextCharacter).join("");
}

console.log(alphabeticShift("crazy"));

function nextCharacter(char: string) {
  const nextCharacter = char.charCodeAt(0) === 122 ? 97 : char.charCodeAt(0) + 1;
  return String.fromCharCode(nextCharacter);
}
