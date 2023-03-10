export function addBorder(picture: string[]): string[] {
  const border = "*****";
  const response = Array.from(picture);
  response.unshift(border);
  response.push(border);
  return response;
}
const picture = ["abc", "ded"];
console.log(addBorder(picture));
