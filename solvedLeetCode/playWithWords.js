function playWithWords(s) {
	// Write your code here
	let length = s.length;
	const dp = {},
		longestPalindromeSubseq = () => {
			let j;
			for (let i = 0; i < length; i++) dp[i] = {};

			for (let l = 1; l < length + 1; l++)
				for (let i = 0; i < length - l + 1; i++) {
					j = i + l - 1;
					if (s[i] === s[j]) {
						dp[i][j] = l < 4 ? l : dp[i + 1][j - 1] + 2;
					} else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
				}
		};
	longestPalindromeSubseq();
	length--;
	let max = 0;
	for (let i = 0; i < length; i++)
		max = Math.max(max, dp[0][i] * dp[i + 1][length]);
	return max;
}
playWithWords("eeegeeksforskeeggeeks");
