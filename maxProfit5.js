/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

var maxProfit = function (prices, fee) {
	//curBuy :max profit where I can only buy
	//curSell:max profit where I can only sell
	let curBuy = 0,
		curSell = 0,
		tmp;

	for (let i = prices.length - 1; i >= 0; i--) {
		tmp = curBuy;
		curBuy = Math.max(curBuy, curSell - prices[i]);
		curSell = Math.max(curSell, tmp + prices[i] - fee);
	}

	return curBuy;
};

var maxProfit1 = function (prices, fee) {
	const profits = {};

	const dfs = (i, canBuy) => {
		if (i > prices.length - 1) return 0;
		if (profits[[i, canBuy]]) return profits[[i, canBuy]];

		const wait = dfs(i + 1, canBuy);
		const move = dfs(i + 1, !canBuy) + (canBuy ? -prices[i] : prices[i] - fee);

		profits[[i, canBuy]] = Math.max(wait, move);

		return profits[[i, canBuy]];
	};

	return dfs(0, true);
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
