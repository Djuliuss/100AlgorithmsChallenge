export function alternatingSums(a: number[]): number[] {
  let [totalWeightTeam1, totalWeightTeam2] = [0, 0];
  a.forEach((e, index) => {
    if (index % 2 === 0) {
      totalWeightTeam1 += e;
    } else {
      totalWeightTeam2 += e;
    }
  });
  return [totalWeightTeam1, totalWeightTeam2];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
