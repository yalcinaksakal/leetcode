/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
	const dp = {};
	let j,res=0;
	
	for (let i = 0; i < s.length; i++) dp[i] = {};

	//l length, i start , j end index
	for (let l = 1; l <= s.length; l++)
		for (let i = 0; i < s.length - l + 1; i++) {
			j = i + l - 1;
			if (s[i] === s[j]) dp[i][j] = l < 4 ? true : dp[i + 1][j - 1];
			if (dp[i][j]) res++;
		}
	
	return res;
}