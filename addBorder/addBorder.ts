export function addBorder(picture: string[]): string[] {
  const border = "*".repeat(picture[0].length + 2);
  const pictureWithSideBorder = picture.map((s) => s.padEnd(s.length + 1, "*").padStart(s.length + 2, "*"));
  const response = Array.from(pictureWithSideBorder);
  response.unshift(border);
  response.push(border);
  return response;
}
const picture = ["abc", "ded"];
console.log(addBorder(picture));
