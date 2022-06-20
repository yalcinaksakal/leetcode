/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	let res = "";
	const check = (l, r) => {
		while (l >= 0 && r < s.length && s[l] === s[r]) l--, r++;
		if (r - l - 1 > res.length) res = s.slice(l + 1, r);
	};
	for (let i = 0; i < s.length; i++) {
		check(i, i);
		check(i, i + 1);
	}
	return res;
};

//chul's
var longestPalindrome = function (s) {
	const dp = {};
	let res = "",
		j;
	for (let i = 0; i < s.length; i++) dp[i] = {};
	for (let length = 1; length <= s.length; length++)
		for (let i = 0; i <= s.length - length; i++) {
			j = i + length - 1;
			if (s[i] === s[j]) {
				dp[i][j] = length < 4 || dp[i + 1][j - 1];
				dp[i][j] && (res = s.slice(i, j + 1));
			}
		}
	return res;
};
