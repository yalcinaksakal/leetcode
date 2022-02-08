/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
	const pre = [],
		post = [],
		l = prices.length - 1;
	let min = prices[0],
		max = prices[l],
		profitPre = 0,
		profitPost = 0,
		price;

	for (let i = 0; i <= l; i++) {
		price = prices[i];
		price < min
			? (min = price)
			: (profitPre = Math.max(profitPre, price - min));
		pre.push(profitPre);

		price = prices[l - i];
		price > max
			? (max = price)
			: (profitPost = Math.max(profitPost, max - price));
		post.unshift(profitPost);
	}
	let res = 0;
	for (let i = 0; i <= l; i++) res = Math.max(res, pre[i] + post[i]);
	return res;
};

var maxProfit1 = function (prices) {
	const profits = {};

	const dfs = (i = 0, canBuy = true, count = 0) => {
		if (i > prices.length - 1 || count == 2) return 0;
		const key = `${i},${canBuy},${count}`;
		if (profits[key]) return profits[key];
		const hold = dfs(i + 1, canBuy, count);

		const sellOrBuy = canBuy
			? dfs(i + 1, !canBuy, count) - prices[i]
			: dfs(i + 1, !canBuy, count + 1) + prices[i];

		profits[key] = Math.max(hold, sellOrBuy);

		return profits[key];
	};

	return dfs();
};
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
