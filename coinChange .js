/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	//max coins= amount/1
	const dp = Array(amount + 1).fill(amount + 1);

	dp[0] = 0;

	for (let a = 1; a < dp.length; a++)
		for (const c of coins)
			if (a - c >= 0) dp[a] = Math.min(dp[a], 1 + dp[a - c]);

	return dp[amount] == amount + 1 ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 3, 6], 6));
