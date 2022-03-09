/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
	let i = 0,
		res = "";

	while (i < word1.length || i < word2.length) {
		res += (word1[i] ? word1[i] : "") + (word2[i] ? word2[i] : "");
		i++;
	}

	return res;
};
