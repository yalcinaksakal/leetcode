/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {
  const gardens = Array(n + 1)
      .fill()
      .map(() => []),
    flowers = Array(n + 1).fill(0);

  for (const [g1, g2] of paths) {
    gardens[g1].push(g2);
    gardens[g2].push(g1);
  }

  let j;
  for (let i = 1; i < n + 1; i++) {
    if (!gardens[i].length) flowers[i] = 1;
    else {
      j = 1;
      while (j < 5) {
        if (!gardens[i].map(g => flowers[g]).includes(j)) break;
        j++;
      }
      flowers[i] = j;
    }
  }
  flowers.shift();
  return flowers;
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
