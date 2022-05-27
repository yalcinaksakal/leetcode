/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
	const dp = Array(envelopes.length).fill(1);
	let max = 1;
	envelopes.sort((a, b) => {
		if (a[0] < b[0]) return -1;
		if (a[0] === b[0] && a[1] < b[1]) return -1;
		return 0;
	});

	for (let i = 1; i < envelopes.length; i++) {
		for (let j = 0; j < i; j++)
			if (
				envelopes[i][0] > envelopes[j][0] &&
				envelopes[i][1] > envelopes[j][1] &&
				dp[i] < 1 + dp[j]
			)
				dp[i] = 1 + dp[j];
		max = Math.max(max, dp[i]);
	}
	return max;
};
