/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
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
		if (i == s.length) return [[]];
		let word = "";
		const res = [];
		for (let k = i; k < i + maxWord; k++) {
			word += s[k];
			if (words[word]) {
				if (dp[k + 1] === undefined) dp[k + 1] = check(k + 1);
				if (dp[k + 1]) dp[k + 1].forEach(el => res.push([word, ...el]));
			}
		}
		return res;
	};

	return check(0).map(r => r.join(" "));
};
console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
