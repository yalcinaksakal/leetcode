/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	const profits = {};

	const dfs = (i, canBuy) => {
		if (i > prices.length - 1) return 0;
		if (profits[[i, canBuy]]) return profits[[i, canBuy]];

		const cool = dfs(i + 1, canBuy);
		const move = canBuy
			? dfs(i + 1, !canBuy) - prices[i]
			: dfs(i + 2, !canBuy) + prices[i];

		profits[[i, canBuy]] = Math.max(cool, move);

		return profits[[i, canBuy]];
	};

	return dfs(0, true);
};
