/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	if (!needle) return 0;
	haystack = haystack.split(needle);
	return haystack.length == 1 ? -1 : haystack[0].length;
};
