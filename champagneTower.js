/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */

/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
	const glasses = Array(query_row + 1)
		.fill()
		.map((_, i) => Array(i + 1).fill(0));

	const fill = (row = 0, amounts = [poured]) => {
		const next = Array(row + 2).fill(0);
		for (let i = 0; i < amounts.length; i++) {
			glasses[row][i] += amounts[i];
			if (glasses[row][i] > 1) {
				const overFlow = (glasses[row][i] - 1) / 2;
				glasses[row][i] = 1;
				next[i] += overFlow;
				next[i + 1] += overFlow;
			}
		}
		if (row < query_row) fill(row + 1, next);
	};

	fill();
	console.log(glasses, glasses[query_row][query_glass]);
	return glasses[query_row][query_glass];
};

champagneTower(1009, 33, 17);
