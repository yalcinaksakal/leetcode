/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = s =>
	s
		.split(" ")
		.sort((a, b) => +a[a.length - 1] - b[b.length - 1])
		.reduce((a, c) => a + (a ? " " : "") + c.slice(0, -1), "");
console.log(sortSentence("is2 sentence4 This1 a3"));
