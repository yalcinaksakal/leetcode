/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
	const wordChars = {},
		check = (w1, w2) => {
			if (wordChars[w1].size + wordChars[w2].size > 26) return false;
			for (const ch of wordChars[w2]) if (wordChars[w1].has(ch)) return false;
			return true;
		};
	let max = 0;
	for (const word of words) wordChars[word] = new Set(word.split(""));
	words.sort((a, b) => (a.length > b.length ? -1 : 0));
	for (let i = 0; i < words.length; i++) {
		if (wordChars[words[i]].size === 26) continue;
		for (let j = i + 1; j < words.length; j++) {
			if (max >= words[i].length * words[j].length) break;
			if (check(words[i], words[j])) {
				max = words[i].length * words[j].length;
				break;
			}
		}
	}
	return max;
};

maxProduct(["ccc", "aa", "bbd", "eqeqw"]);
