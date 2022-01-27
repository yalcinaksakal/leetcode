/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (mat) {
	const m = mat.length,
		n = mat[0].length;
	const checkDiagonal = (i, j) => {
		const val = mat[i][j];
		while (++i < m && ++j < n) if (mat[i][j] != val) return false;
		return true;
	};

	for (let i = m - 2; i > -1; i--) if (!checkDiagonal(i, 0)) return false;
	for (let i = 1; i < n - 1; i++) if (!checkDiagonal(0, i)) return false;
	return true;
};
console.log(isToeplitzMatrix([[84]]));
