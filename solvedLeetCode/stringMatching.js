/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
	words.sort((w1, w2) => w1.length - w2.length);

	const res = [];

	for (let i = 0; i < words.length; i++)
		for (let j = i + 1; j < words.length; j++)
			if (words[j].split(words[i]).length > 1) {
				res.push(words[i]);
				break;
			}

	return res;
};
