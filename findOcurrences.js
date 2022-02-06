/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
	text = text.split(" ");
	const seek = first + second;
	const res = [];
	for (let i = 0; i < text.length - 2; )
		if (text[i++] + text[i] == seek) res.push(text[i + 1]);
	return res;
};
