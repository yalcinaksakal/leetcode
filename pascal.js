/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const pascal = Array(numRows)
    .fill()
    .map((_, i) => Array(i + 1).fill(0));
  pascal[0][0] = 1;
  console.log(pascal);
  for (let i = 1; i < numRows; i++)
    for (let j = 0; j < i + 1; j++)
      pascal[i][j] =
        !j || j === i ? 1 : pascal[i - 1][j - 1] + pascal[i - 1][j];
  return pascal;
};

console.log(generate(6));
