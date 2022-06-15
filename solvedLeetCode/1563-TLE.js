/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function (stoneValue) {
	const dp = {},
		prefixSum = { [-1]: 0 };
	let max, start, leftSum, rightSum;
	for (let i = 0; i < stoneValue.length; i++) {
		dp[i + "," + i] = 0;
		prefixSum[i] = stoneValue[i] + prefixSum[i - 1];
	}
	for (let length = 2; length <= stoneValue.length; length++)
		for (let i = length - 1; i < stoneValue.length; i++) {
			max = 0;
			start = i - length + 1;
			for (let j = start; j < i; j++) {
				leftSum = prefixSum[j] - prefixSum[start - 1];
				rightSum = prefixSum[i] - prefixSum[j];
				max = Math.max(
					max,
					leftSum === rightSum
						? Math.max(dp[start + "," + j], dp[j + 1 + "," + i]) + leftSum
						: leftSum > rightSum
						? rightSum + dp[j + 1 + "," + i]
						: leftSum + dp[start + "," + j]
				);
			}
			dp[start + "," + i] = max;
		}
	return dp[0 + "," + (stoneValue.length - 1)];
};
stoneGameV([6, 2, 3, 4, 5, 5]);
stoneGameV([7, 7, 7, 7, 7, 7, 7]);
