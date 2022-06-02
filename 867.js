/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
	const n = matrix.length,
		m = matrix[0].length,
		transposed = Array(m)
			.fill()
			.map(() => Array(n).fill());
	for (let i = 0; i < n; i++)
		for (let j = 0; j < m; j++) transposed[j][i] = matrix[i][j];
	return transposed;
};
transpose([
	[1, 2, 3],
	[4, 5, 6],
]);
