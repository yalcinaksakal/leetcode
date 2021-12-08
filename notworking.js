/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {
  const flowers = Array(n + 1)
    .fill()
    .map(() => Array(5).fill(0));
  const findAvailableFlower = (g1, g2) => {
    let i = 1;
    while (i < 5) {
      if (!flowers[g1][i] && i !== flowers[g1][0]) {
        if (
          flowers[g1][0] === flowers[g2][0] ||
          (!flowers[g2][i] && i !== flowers[g2][0])
        )
          return i;
      }
      i++;
    }
    return false;
  };
  //flowers[i][0] is the flower planted in the i th garden
  for (const [g1, g2] of paths) {
    //if destination garden is planted, mark it
    if (!flowers[g2][0] || flowers[g2][0] === flowers[g1][0])
      flowers[g2][0] = findAvailableFlower(g1, g2);
    flowers[g1][flowers[g2][0]] = 1;
    if (!flowers[g1][0]) flowers[g1][0] = findAvailableFlower(g1, g2);
    flowers[g2][flowers[g1][0]] = 1;
  }
  const result = flowers.map(row => (row[0] ? row[0] : 1));
  result.shift();

  return result;
};

console.log(
  gardenNoAdj(7, [
    [7, 1],
    [1, 3],
    [7, 3],
    [3, 6],
    [2, 7],
    [4, 2],
    [1, 4],
  ])
);
