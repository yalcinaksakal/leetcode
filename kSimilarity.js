/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var kSimilarity = function (s1, s2) {
	const dp = { "": 0 };

	const swap = (s1, s2) => {
		if (dp[s1]) return dp[s1];
		dp[s1] = 0;
		let i = 0;
		while (s1[i] == s2[i] && i < s1.length) i++;
		if (i == s1.length) return 0;
		else {
			dp[s1] = s1.length;
			for (let j = i + 1; j < s1.length; j++)
				if (s1[j] == s2[i]) {
					const w = s1.split("");
					w[j] = w[i];
					dp[s1] = Math.min(
						dp[s1],
						1 + swap(w.slice(i + 1).join(""), s2.slice(i + 1))
					);
				}
		}
		return dp[s1];
	};
	return swap(s1, s2);
};
console.log(kSimilarity("abccaacceecdeea", "bcaacceeccdeaae"));
