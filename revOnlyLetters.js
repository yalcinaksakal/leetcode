/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
	const letters = [
		"Z",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
	];

	const revS = s
		.replace(/[^a-zA-Z]/g, "")
		.split("")
		.reverse()
		.join("");
	console.log(revS);
	let res = "",
		j = 0;

	for (let i = 0; i < s.length; i++)
		if (letters.includes(s[i].toUpperCase())) {
			res += revS[j];
			j++;
		} else res += s[i];

	return res;
};

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));

const a = [1, 2, 3];
a.pop();
console.log(a.length);
