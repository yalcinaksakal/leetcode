/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function (n, cuts) {
	const dp = {},
		getMinCut = (i, j) => {
			const key = i + "," + j;
			if (dp[key]) return dp[key];
			let next,
				min = 0;

			for (const cut of cuts)
				if (cut > i && cut < j) {
					next = getMinCut(i, cut) + getMinCut(cut, j);
					if (!min || next < min) min = next;
				}

			dp[key] = min + (next === undefined ? 0 : j - i);
			return dp[key];
		};

	return getMinCut(0, n);
};
console.log(minCost(7, [1, 3, 4, 5]));
