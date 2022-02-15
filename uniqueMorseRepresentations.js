/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
	const morse = [
			".-",
			"-...",
			"-.-.",
			"-..",
			".",
			"..-.",
			"--.",
			"....",
			"..",
			".---",
			"-.-",
			".-..",
			"--",
			"-.",
			"---",
			".--.",
			"--.-",
			".-.",
			"...",
			"-",
			"..-",
			"...-",
			".--",
			"-..-",
			"-.--",
			"--..",
		],
		encoded = new Set();
	for (const word of words) {
		let e = "";
		for (let i = 0; i < word.length; i++) e += morse[word.charCodeAt(i) - 97];
		encoded.add(e);
	}
	return encoded.size;
};
