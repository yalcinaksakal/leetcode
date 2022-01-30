/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function (w) {
	const dp = {};
	let word = "";
	for (let i = 0; i < w.length; i++) if (w[i] != w[i + 1]) word += w[i];

	const dist = (a, b) => {
		a = word.charCodeAt(a) - 65;
		b = word.charCodeAt(b) - 65;
		const row_a = Math.floor(a / 6),
			col_a = a % 6,
			row_b = Math.floor(b / 6),
			col_b = b % 6;
		return Math.abs(row_a - row_b) + Math.abs(col_a - col_b);
	};

	const solve = (i, left, right) => {
		if (i == word.length) return 0;
		const key = i + "," + left + "," + right;
		if (dp[key]) return dp[key];
		const leftDist = left == -1 ? 0 : dist(left, i);
		const rightDist = right == -1 ? 0 : dist(right, i);

		dp[key] = Math.min(
			leftDist + solve(i + 1, i, right),
			rightDist + solve(i + 1, left, i)
		);

		return dp[key];
	};

	return solve(0, -1, -1);
};
console.log(minimumDistance("AADD"));
