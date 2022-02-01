/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
	const m = rowSum.length,
		n = colSum.length,
		mat = [];

	for (let i = 0; i < m; i++) {
		mat.push([]);
		for (let j = 0; j < n; j++) {
			mat[i].push(Math.min(rowSum[i], colSum[j]));
			rowSum[i] -= mat[i][j];
			colSum[j] -= mat[i][j];
		}
	}
	return mat;
};
