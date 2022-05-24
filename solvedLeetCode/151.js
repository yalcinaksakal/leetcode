/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = s =>
	s
		.trim()
		.split(" ")
		.filter(w => w)
		.reverse()
		.join(" ");
