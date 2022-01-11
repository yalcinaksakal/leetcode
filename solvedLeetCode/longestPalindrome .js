/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	const chars = {};
	let doubles = 0;

	for (const ch of s)
		if (chars[ch]) {
			chars[ch] % 2 && doubles++;
			chars[ch]++;
		} else chars[ch] = 1;

	return s.length % 2 ? 2 * doubles + 1 : 2 * doubles;
};
