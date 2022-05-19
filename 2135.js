/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function (startWords, targetWords) {
	let res = 0;
	const dict = {},
		sort = w =>
			w
				.split("")
				.sort((a, b) => {
					if (a > b) return -1;
					return 0;
				})
				.join("");
	for (const word of startWords) dict[sort(word)] = true;
	for (let word of targetWords) {
		word = sort(word);
		for (let i = 0; i < word.length; i++)
			if (dict[word.slice(0, i) + word.slice(i + 1)]) {
				res++;
				break;
			}
	}
	return res;
};
