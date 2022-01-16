/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
	const res = [];

	for (let i = 0; i < rows; i++)
		for (let j = 0; j < cols; j++)
			res.push({ d: Math.abs(i - rCenter) + Math.abs(j - cCenter), c: [i, j] });

	return res.sort((a, b) => a.d - b.d).map(el => el.c);
};
