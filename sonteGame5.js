/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function (stoneValue) {
	const dp = {};
	let max, start;
	//prefix sum
	//toplamı buyük olanı atcan, eşitse dp si küçük olanı atcan
	for (let i = 0; i < stoneValue.length; i++) dp[i + "," + i] = stoneValue[i];
	for (let length = 2; length <= stoneValue.length; length++)
		for (let i = length - 1; i < stoneValue.length; i++) {
			max = 0;
			start = i - length + 1;
			for (let j = start; j < i; j++)
				max = Math.max(max, Math.min(dp[start + "," + j], dp[j + 1 + "," + i]));
			dp[start + "," + i] = max;
		}
	return dp[0 + "," + (stoneValue.length - 1)];
};
stoneGameV([6, 2, 3, 4, 5, 5]);
