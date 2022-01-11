/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
	const patternMap = {},
		wordMap = {},
		words = s.split(" ");
	let ch, w;

	if (words.length !== pattern.length) return false;

	for (i = 0; i < pattern.length; i++) {
		ch = pattern[i];
		if (!patternMap[ch]) {
			w = words[i];
			if (wordMap[w]) return false;
			patternMap[ch] = words[i];
			wordMap[w] = ch;
			continue;
		}
		if (patternMap[ch] !== words[i]) return false;
	}
	return true;
};
