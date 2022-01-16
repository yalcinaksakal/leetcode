/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
	const words = {},
		dp = {};
	let maxWord = 0;
	for (const word of wordDict) {
		words[word] = 1;
		maxWord = Math.max(maxWord, word.length);
	}

	const check = i => {
		let word = "";
		if (i == s.length) return true;
		for (let k = i; k < i + maxWord; k++) {
			word += s[k];
			if (words[word]) {
				if (dp[k + 1] === undefined) dp[k + 1] = check(k + 1);
				if (dp[k + 1]) return true;
			}
		}
		return false;
	};

	return check(0);
};
