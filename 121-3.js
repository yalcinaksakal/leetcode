/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
	let profit = 0,
		min = prices[0];
	for (const p of prices)
		p > min ? (profit = Math.max(p - min, profit)) : (min = p);
	return profit;
};
