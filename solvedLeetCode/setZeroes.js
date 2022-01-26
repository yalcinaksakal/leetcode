/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
	const m = matrix.length,
		n = matrix[0].length;

	const mark = (i, j) => {
		for (let k = 0; k < m; k++) if (matrix[k][j]) matrix[k][j] = ".";
		for (let k = 0; k < n; k++) if (matrix[i][k]) matrix[i][k] = ".";
	};

	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++) if (!matrix[i][j]) mark(i, j);

	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++) if (matrix[i][j] == ".") matrix[i][j] = 0;
};
