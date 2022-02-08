/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
	const n = mat.length;
	let tmp;

	const rotate = () => {
		for (let i = 0; i < n; ++i)
			for (let j = i; j < n; ++j) {
				tmp = mat[i][j];
				mat[i][j] = mat[j][i];
				mat[j][i] = tmp;
			}

		for (let j = 0; j < n; j++)
			for (let i = 0; i < n / 2; ++i) {
				tmp = mat[i][j];
				mat[i][j] = mat[n - i - 1][j];
				mat[n - i - 1][j] = tmp;
			}
	};
	const check = () => {
		for (let i = 0; i < n; ++i)
			for (let j = 0; j < n; ++j) if (mat[i][j] != target[i][j]) return false;
		return true;
	};

	for (let i = 0; i < 4; i++) {
		if (check()) return true;
		rotate();
	}
	return false;
};

findRotation(
	[
		[0, 1],
		[1, 1],
	],
	[
		[1, 0],
		[0, 1],
	]
);
