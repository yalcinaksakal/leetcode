/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
	if (k > s.length) return false;
	if (k == s.length) return true;
	const chars = {};
	let doubles = 0;

	for (const ch of s)
		if (chars[ch]) {
			chars[ch] % 2 && doubles++;
			chars[ch]++;
		} else chars[ch] = 1;

	doubles *= 2;

	const longestPalLength = s.length > doubles ? doubles + 1 : doubles;
	const min = s.length - longestPalLength + 1;
	if (k < min) return false;
	if (longestPalLength >= k - s.length + longestPalLength) return true;

	return false;
};
