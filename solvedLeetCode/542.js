// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Example 1:

// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]
// Example 2:

// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]

var updateMatrix = function (mat) {
  m = mat.length;
  n = mat[0].length;
  distance = -1;
  placed = 0;

  result = Array(m)
    .fill(null)
    .map(() => Array(n).fill(null));

  const placer = (i, j, value) => {
    if (i + 1 < m && result[i + 1][j] === null) {
      placed++;
      result[i + 1][j] = value;
    }
    if (i - 1 >= 0 && result[i - 1][j] === null) {
      placed++;
      result[i - 1][j] = value;
    }
    if (j + 1 < n && result[i][j + 1] === null) {
      placed++;
      result[i][j + 1] = value;
    }
    if (j - 1 >= 0 && result[i][j - 1] === null) {
      placed++;
      result[i][j - 1] = value;
    }
  };

  while (placed < m * n) {
    for (i = 0; i < m; i++)
      for (j = 0; j < n; j++) {
        if (distance === -1 && !mat[i][j]) {
          result[i][j] = 0;
          placed++;
        } else if (distance === 0 && !mat[i][j]) {
          placer(i, j, 1);
        } else if (distance > 0 && result[i][j] === distance) {
          placer(i, j, distance + 1);
        }
      }
    distance++;
  }
  return result;
};

console.log(
  updateMatrix([
    [0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
  ])
);
