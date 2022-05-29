/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
	const brokens = new Set(brokenLetters.split(""));
	text = text.split(" ");
	let res = text.length;
	for (const word of text)
		for (const ch of word)
			if (brokens.has(ch)) {
				res--;
				break;
			}
	return res;
};
