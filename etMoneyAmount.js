/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
	if (n < 3) return n - 1;
	const dp = {};
	let cost, j;

	for (let i = 1; i <= n; i++) {
		dp[i] = {};
		dp[i][i] = 0; //single range cost is 0
		dp[i][i + 1] = i; //2 num range cost is lower num
	}

	for (let len = 3; len <= n; len++) {
		for (let i = 1; i <= n - len + 1; i++) {
			cost = 20000;
			j = i + len - 1;
			for (let pivot = i + 1; pivot < j; pivot++) {
				cost = Math.min(
					cost,
					pivot +
						Math.max(
							pivot - 1 >= i ? dp[i][pivot - 1] : 0,
							pivot + 1 <= j ? dp[pivot + 1][j] : 0
						)
				);
			}
			dp[i][j] = cost;
		}
	}
	return dp[1][n];
};
console.log(getMoneyAmount(10));
