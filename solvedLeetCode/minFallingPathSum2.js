/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
	const m = matrix.length,
		n = matrix[0].length;
	let min;

	for (let i = 1; i < m; i++)
		for (let j = 0; j < n; j++) {
			min = matrix[i - 1][j];
			if (j && min > matrix[i - 1][j - 1]) min = matrix[i - 1][j - 1];
			if (j + 1 < n && min > matrix[i - 1][j + 1]) min = matrix[i - 1][j + 1];
			matrix[i][j] += min;
		}

	return Math.min(...matrix[m - 1]);
};
