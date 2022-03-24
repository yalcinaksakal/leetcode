/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
	const fill = (row = 0, amounts = [poured]) => {
		const next = [0];
		let overFlow;
		for (let i = 0; i < amounts.length; i++) {
			overFlow = 0;
			if (amounts[i] > 1) {
				overFlow = (amounts[i] - 1) / 2;
				amounts[i] = 1;
			}
			next[i] += overFlow;
			next.push(overFlow);
		}
		return row < query_row ? fill(row + 1, next) : amounts[query_glass];
	};

	return fill();
};
champagneTower(100000009, 33, 17);
