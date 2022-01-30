/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
	let a, c;
	const m = matrix.length,
		n = matrix[0].length;
	for (let i = 1; i < m; i++)
		for (let j = 0; j < n; j++) {
			a = j ? matrix[i - 1][j - 1] : matrix[i - 1][j];
			c = j + 1 < n ? matrix[i - 1][j + 1] : matrix[i - 1][j];
			matrix[i][j] += Math.min(a, matrix[i - 1][j], c);
		}

	return Math.min(...matrix[m - 1]);
};
minFallingPathSum([
	[-19, 57],
	[-40, -5],
]);
