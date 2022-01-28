/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (mat) {
	const m = mat.length,
		n = mat[0].length;

	for (let i = 1; i < m; i++)
		for (let j = 1; j < n; j++)
			if (mat[i][j] != mat[i - 1][j - 1]) return false;

	return true;
};
