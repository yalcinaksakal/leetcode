/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
	if (stones == null || stones.length == 0) return 0;
	let sum = 0;
	const dp = {};
	dp[0] = true;

	for (const stone of stones) {
		sum += stone;
		for (let i = Math.min(1501, sum); i >= stone; i--)
			!dp[i] && (dp[i] = dp[i - stone]);
	}
	for (let i = Math.floor(sum / 2); i >= 0; i--) if (dp[i]) return sum - i - i;

	return 0;
};
