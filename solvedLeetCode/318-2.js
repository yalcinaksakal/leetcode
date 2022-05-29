/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
	const wordBitMap = {},
		allChars = 1 << (27 - 1);
	let max = 0;
	for (const word of words)
		wordBitMap[word] = Array.from(new Set(word.split(""))).reduce(
			(acc, cur) => acc + (1 << (cur.charCodeAt(0) - 97)),
			0
		);
	words.sort((a, b) => (a.length > b.length ? -1 : 0));
	for (let i = 0; i < words.length; i++) {
		if (wordBitMap[words[i]] === allChars) continue;
		for (let j = i + 1; j < words.length; j++) {
			if (max >= words[i].length * words[j].length) break;
			if (wordBitMap[words[i]] & wordBitMap[words[j]]) continue;
			max = words[i].length * words[j].length;
			break;
		}
	}
	return max;
};

maxProduct(["ccc", "aa", "bbd", "eqeqw"]);
