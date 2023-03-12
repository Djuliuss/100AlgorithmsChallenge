export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;
  const yourTotalStrength = yourLeft + yourRight;
  const friendsTotalStrength = friendsLeft + friendsRight;
  return yourStrongest === friendsStrongest && yourTotalStrength === friendsTotalStrength;
}

// console.log(areEquallyStrong(10, 15, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 9))
