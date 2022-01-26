/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
	const m = matrix.length,
		n = matrix[0].length;
	let res = 0;
	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++) {
			if (matrix[i][j] && i && j)
				matrix[i][j] =
					1 +
					Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]);
			res += matrix[i][j];
		}

	return res;
};
console.log(
	countSquares([
		[0, 1, 1, 1],
		[1, 1, 1, 1],
		[0, 1, 1, 1],
	])
);
