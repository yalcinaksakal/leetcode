/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
	const weakest = [],
		n = mat[0].length - 1,
		countSoldiers = row => {
			let low = 0,
				mid,
				high = n;
			while (low < high) {
				mid = (low + high) >>> 1;
				mat[row][mid] ? (low = mid + 1) : (high = mid);
			}
			return low + mat[row][low];
		};
	for (let i = 0; i < mat.length; i++) weakest.push([i, countSoldiers(i)]);
	weakest.sort((a, b) => {
		if (a[1] < b[1]) return -1;
		if (a[1] === b[1] && a[0] < b[0]) return -1;
		return 0;
	});
	return weakest.slice(0, k).map(r => r[0]);
};

kWeakestRows(
	[
		[1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0],
		[1, 1, 0, 0, 0],
		[1, 1, 1, 1, 0],
		[1, 1, 1, 1, 1],
	],
	3
);

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = (mat, k) =>
	mat
		.map((row, i) => [row.reduce((a, c) => a + c, 0), i])
		.sort((a, b) => {
			if (a[0] < b[0]) return -1;
			if (a[0] === b[0] && a[1] < b[1]) return -1;
			return 0;
		})
		.slice(0, k)
		.map(r => r[1]);
