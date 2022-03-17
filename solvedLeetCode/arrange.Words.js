/**
 * @param {string} text
 * @return {string}
 */
const arrangeWords = text => {
	text = text
		.toLowerCase()
		.split(" ")
		.sort((a, b) => a.length - b.length)
		.join(" ");
	return text[0].toUpperCase() + text.slice(1);
};

console.log(arrangeWords("Leetcode is cool"));
