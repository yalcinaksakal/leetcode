/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
	const alp = {};
	for (let i = 0; i < order.length; i++) alp[order[i]] = i;

	const check = (w1, w2) => {
		const l = Math.min(w1.length, w2.length);
		for (let i = 0; i < l; i++)
			if (alp[w1[i]] < alp[w2[i]]) return true;
			else if (alp[w1[i]] > alp[w2[i]]) return false;
		return w1.length <= w2.length;
	};

	for (let i = 1; i < words.length; i++)
		if (!check(words[i - 1], words[i])) return false;

	return true;
};
console.log(
	isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
);
