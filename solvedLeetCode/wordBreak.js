/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
	const map = {},
		checkMap = {};
	let maxWord = 0;
	for (const word of wordDict) {
		map[word] = 1;
		maxWord = Math.max(maxWord, word.length);
	}

	const check = str => {
		let word = "";
		if (!str.length) return true;
		for (let i = 0; i < maxWord; i++) {
			word += str[i];
			if (map[word]) {
				const remaining = str.slice(i + 1);
				if (checkMap[remaining] === undefined)
					checkMap[remaining] = check(remaining);
				if (checkMap[remaining]) return true;
			}
		}
		return false;
	};

	return check(s);
};

console.log(
	wordBreak("catsandogcat", ["cats", "dog", "sand", "and", "cat", "an"])
);
