var diagonalSort = function (mat) {
	const m = mat.length,
		n = mat[0].length,
		sorter = (i, j) => {
			const diag = [];
			while (i < m && j < n) {
				diag.push(mat[i][j]);
				i++, j++;
			}
			diag.sort((a, b) => a - b);
			while (--i > -1 && --j > -1) mat[i][j] = diag.pop();
		};
	for (let i = 0; i < m - 1; i++) sorter(i, 0);
	for (let i = 1; i < n - 1; i++) sorter(0, i);

	return mat;
};
