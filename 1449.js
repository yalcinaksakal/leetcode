/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */

var largestNumber = function (cost, target) {
	const dp = Array(target + 1)
			.fill()
			.map(() => []),
		costs = {},
		compare = (digits1, digits2) => {
			digits1.sort((a, b) => b - a);
			digits2.sort((a, b) => b - a);
			for (let i = 0; i < digits1.length; i++)
				if (digits1[i] !== digits2[i])
					return digits1[i] > digits2[i] ? digits1 : digits2;
			return digits1;
		};
	for (let d = 0; d < cost.length; d++) costs[cost[d]] = d + 1;
	if (costs[1]) return (costs[1] + "").repeat(target);
	dp[0].push(0);
	for (let a = 1; a < dp.length; a++)
		for (const c of Object.keys(costs))
			if (a >= c && dp[a - c].length) {
				const digits = [...dp[a - c], costs[c]];
				if (digits.length > dp[a].length) dp[a] = digits;
				else if (digits.length === dp[a].length) dp[a] = compare(digits, dp[a]);
			}
	if (!dp[target].length) return "0";
	dp[target].sort((a, b) => b - a).pop();
	return dp[target].join("");
};
