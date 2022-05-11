/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
	const keys = [
		"",
		"",
		["a", "b", "c"],
		["d", "e", "f"],
		["g", "h", "i"],
		["j", "k", "l"],
		["m", "n", "o"],
		["p", "q", "r", "s"],
		["t", "u", "v"],
		["w", "x", "y", "z"],
	];
	let res = digits.length ? [""] : [];
	for (const digit of digits)
		res = res.flatMap(prevComb => keys[digit].map(ch => prevComb + ch));
	return res;
};
console.log(letterCombinations("234"));
