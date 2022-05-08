/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */

var largestNumber = function (cost, target) {
	const costs = {};
	for (let d = 0; d < cost.length; d++) costs[cost[d]] = d + 1;

	if (costs[1]) return (costs[1] + "").repeat(target);

	const initialState = (() => {
			const state = {};
			for (const digit of Object.values(costs)) state[digit] = 0;
			state.digitCount = 0;
			return state;
		})(),
		costsKeys = Object.keys(costs),
		dp = Array(target + 1)
			.fill()
			.map(() => ({ ...initialState })),
		compare = (state1, state2) => {
			for (let i = 9; i > 0; i--)
				if (state1[i] !== state2[i])
					return state1[i] > state2[i] ? state1 : state2;
			return state1;
		};
	dp[0].digitCount = 1;

	for (let a = 1; a < dp.length; a++)
		for (const c of costsKeys)
			if (a >= c && dp[a - c].digitCount) {
				const newState = { ...dp[a - c] };
				newState.digitCount++;
				newState[costs[c]]++;
				if (newState.digitCount > dp[a].digitCount) dp[a] = newState;
				else if (newState.digitCount === dp[a].digitCount)
					dp[a] = compare(newState, dp[a]);
			}
	if (!dp[target].digitCount) return "0";

	let res = "";
	for (let i = 9; i > 0; i--)
		dp[target][i] && (res += (i + "").repeat(dp[target][i]));
	return res;
};

console.log(largestNumber([1, 1, 1, 1, 1, 1, 1, 1, 1], 5000));
