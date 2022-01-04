/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
	let j;
	const dp = {};
	for (let i = 0; i < s.length; i++) dp[i] = {};

	for (let l = 1; l < s.length + 1; l++)
		// max of start index of substring  is total length - length of substring
		for (let i = 0; i < s.length - l + 1; i++) {
			//j=end of substring, length is l, start is i, j=i+l-1  => end(i+l-1)  -start(i) + 1 = l
			j = i + l - 1;
			if (s[i] === s[j]) {
				dp[i][j] = l < 4 ? l : dp[i + 1][j - 1] + 2;
			} else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
		}
	console.log(dp);
};

longestPalindromeSubseq("bbbab");
