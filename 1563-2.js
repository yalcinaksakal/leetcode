/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function (stoneValue) {
	const memo = {},
		prefixSum = { [-1]: 0 },
		game = (start, end) => {
			const key = start + "," + end;
			if (memo[key]) return memo[key];
			let max = 0,
				leftSum,
				rightSum;
			for (let i = start; i < end; i++) {
				leftSum = prefixSum[i] - prefixSum[start - 1];
				rightSum = prefixSum[end] - prefixSum[i];
				max = Math.max(
					max,
					leftSum === rightSum
						? Math.max(game(start, i), game(i + 1, end)) + leftSum
						: leftSum > rightSum
						? rightSum + game(i + 1, end)
						: leftSum + game(start, i)
				);
			}
			memo[key] = max;
			return max;
		};

	for (let i = 0; i < stoneValue.length; i++)
		prefixSum[i] = stoneValue[i] + prefixSum[i - 1];

	const res = game(0, stoneValue.length - 1);
	return res;
};
console.log(stoneGameV([6, 2, 3, 4, 5, 5]));
console.log(stoneGameV([7, 7, 7, 7, 7, 7, 7]));
