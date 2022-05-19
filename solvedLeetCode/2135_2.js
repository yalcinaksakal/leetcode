/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function (startWords, targetWords) {
	let res = 0;
	const dict = {},
		getMask = w => {
			const mask = Array(26).fill(0);
			for (let i = 0; i < w.length; i++) mask[w.charCodeAt(i) - 97] = 1;
			return mask;
		};

	for (let word of startWords) {
		word = getMask(word);
		for (let i = 0; i < 26; i++) {
			if (!word[i]) {
				word[i] = 1;
				dict[word.join("")] = true;
				word[i] = 0;
			}
		}
	}
	for (const word of targetWords) dict[getMask(word).join("")] && res++;
	return res;
};
