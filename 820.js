/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
	words = Array.from(new Set(words));
	const s = words.join(".") + ".";
	let length = s.length;
	for (const word of words)
		s.split(word + ".").length > 2 && (length -= word.length + 1);
	return length;
};
var minimumLengthEncoding = words =>
	Array.from(new Set(words))
		.sort((a, b) => b.length - a.length)
		.reduce((acc, cur) => (acc.includes(cur + ".") ? acc : acc + cur + "."), "")
		.length;
