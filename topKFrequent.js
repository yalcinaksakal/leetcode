/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
	const freq = {};
	for (const w of words) freq[w] ? freq[w]++ : (freq[w] = 1);
	return Object.keys(freq)
		.sort((a, b) => {
			if (freq[a] > freq[b]) return -1;
			if (freq[a] == freq[b] && a < b) return -1;
		})
		.slice(0, k);
};
