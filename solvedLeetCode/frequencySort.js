/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
	const freq = {};
	for (const c of s) freq[c] ? freq[c]++ : (freq[c] = 1);
	return Object.entries(freq)
		.sort((a, b) => b[1] - a[1])
		.reduce((acc, cur) => acc + cur[0].repeat(cur[1]), "");
};
