/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length,
    n = grid[0].length;

  let rotens = [],
    newRotens = [];

  grid.flat().forEach((e, i) => {
    console.log(Math.floor(i / n), i % n);
    if (e === 2) rotens.push({ x: Math.floor(i / n), y: i % n });
  });

  let freshes = grid.flat().filter(f => f === 1).length,
    isChanged = true,
    minutes = 0;

  const isPossible = (x, y) => !(x < 0 || y < 0 || x > m - 1 || y > n - 1);

  const rotenMaker = () => {
    for (const { x, y } of rotens) {
      for (const [a, b] of [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
      ]) {
        if (isPossible(a, b) && grid[a][b] === 1) {
          isChanged = true;
          grid[a][b] = 2;
          freshes--;
          newRotens.push({ x: a, y: b });
        }
      }
    }
  };

  while (freshes && isChanged) {
    isChanged = false;
    minutes++;
    newRotens = [];
    rotenMaker();
    rotens = newRotens;
  }

  return freshes ? -1 : minutes;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
