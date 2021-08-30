// Range Addition II
// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

// Count and return the number of maximum integers in the matrix after performing all the operations.

// Example 1:

// Input: m = 3, n = 3, ops = [[2,2],[3,3]]
// Output: 4
// Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.
// Example 2:

// Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
// Output: 4
// Example 3:

// Input: m = 3, n = 3, ops = []
// Output: 9

// Constraints:

// 1 <= m, n <= 4 * 104
// 1 <= ops.length <= 104
// ops[i].length == 2
// 1 <= ai <= m
// 1 <= bi <= n

//faster
const maxCount1 = function (m, n, ops) {
  for (const op of ops) {
    m = Math.min(op[0], m);
    n = Math.min(op[1], n);
  }
  return m * n;
};

//chiper
const maxCount = function (m, n, ops) {
  for (const op of ops) {
    m = m < op[0] ? m : op[0];
    n = n < op[1] ? n : op[1];
  }
  return m * n;
};

//not bad
// const maxCount = function (m, n, ops) {
//   if (!ops.length) return m * n;
//   flatOps = ops.flat();
//   minX = Math.min(...flatOps.filter((_, i) => i % 2));
//   minY = Math.min(...flatOps.filter((_, i) => !(i % 2)));
//   return minX * minY;
// };

//too bad
// const maxCount = function (m, n, ops) {
//     const result = [];
//     max = 0;
//     for (const range of ops) {
//       for (i = 0; i < range[0]; i++)
//         for (j = 0; j < range[1]; j++) {
//           if (!result[i]) result[i] = [];
//           result[i][j] = result[i][j] ? result[i][j] + 1 : 1;
//           max = max < result[i][j] ? result[i][j] : max;
//         }
//     }
//     return max ? result.flat().filter(el => el === max).length : m*n;
//   };

console.log(
  maxCount(3, 3, [
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
  ])
);
