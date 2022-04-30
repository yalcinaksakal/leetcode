/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */

var largestNumber = function (cost, target) {
	const costs = {};
	for (let d = 0; d < cost.length; d++) costs[cost[d]] = d + 1;

	if (costs[1]) return (costs[1] + "").repeat(target);

	const dp = Array(target + 1)
			.fill()
			.map(() => Array(11).fill(0)),
		compare = (state1, state2) => {
			for (let i = 9; i > 0; i--)
				if (state1[i] !== state2[i])
					return state1[i] > state2[i] ? state1 : state2;
			return state1;
		};
	//last item is digitCount, target 0 has 1 digit= 0
	dp[0][10] = 1;

	for (let a = 1; a < dp.length; a++)
		for (const c of Object.keys(costs))
			if (a >= c && dp[a - c][10]) {
				const newState = [...dp[a - c]];
				newState[10]++;
				newState[costs[c]]++;
				if (newState[10] > dp[a][10]) dp[a] = newState;
				else if (newState[10] === dp[a][10]) dp[a] = compare(newState, dp[a]);
			}

	if (!dp[target][10]) return "0";

	let res = "";
	for (let i = 9; i > 0; i--)
		dp[target][i] && (res += (i + "").repeat(dp[target][i]));
	return res;
};

console.log(largestNumber([1, 1, 1, 1, 1, 1, 1, 1, 1], 5000));
