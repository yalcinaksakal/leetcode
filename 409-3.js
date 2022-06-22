/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	const chars = {};
	let doubles = 0;
	for (const ch of s)
		chars[ch] ? chars[ch]++ % 2 && doubles++ : (chars[ch] = 1);
	doubles *= 2;
	return s.length > doubles ? doubles + 1 : doubles;
};
