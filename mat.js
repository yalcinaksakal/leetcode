/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
	if (mat.length * mat[0].length !== r * c) return mat;

	const res = Array(r)
		.fill()
		.map(() => Array(c).fill());

	mat.flat().forEach((el, i) => (res[Math.floor(i / c)][i % c] = el));

	return res;
};
