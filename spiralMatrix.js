var generateMatrix = function (n) {
  let step = 1;
  const matrix = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let x = 0,
    y = 0,
    direction = 0;

  const isPossible = (x, y) =>
    !(x < 0 || y < 0 || x > n - 1 || y > n - 1 || matrix[x][y]);

  for (let i = 0; i < n * n; i++) {
    matrix[x][y] = step;
    step++;
    if (
      !isPossible(x + directions[direction][0], y + directions[direction][1])
    ) {
      direction++;
      direction %= 4;
    }
    x += directions[direction][0];
    y += directions[direction][1];
  }
  return matrix;
};
console.log(generateMatrix(3));
