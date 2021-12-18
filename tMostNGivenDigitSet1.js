/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function (digits, n) {
	let res = 0;

	const l = (n + "").length;

	const numOfdigits = digits.length;

	for (let i = 0; i < l - 1; i++) res += numOfdigits ** (i + 1);

	const process = n => {
		let possibilities = digits.findIndex(d => +d > n || +d === n);
		const check = +digits[possibilities] === n;
		if (possibilities === -1) possibilities = numOfdigits;

		return { check, possibilities };
	};

	let cur = 1,
		check,
		possibilities;
	for (const ch of n + "") {
		check = process(+ch);
		possibilities = check.possibilities;
		check = check.check;
		if (cur === 1 && digits[0] === "0") possibilities--;
		res += possibilities * numOfdigits ** (l - cur);
		if (!check) break;
		cur++;
	}
	if (check) res++;
	return res;
};

/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet1 = function (digits, n) {
	let res = 0;
	const chosen = [];

	const permute = () => {
		if (chosen.length === (n + "").length) return;
		for (const digit of digits) {
			chosen.push(digit);
			if (+chosen.join("") <= n) {
				res++;
				permute();
			}
			chosen.pop();
		}
	};

	permute();

	return res;
};

console.log(atMostNGivenDigitSet(["3", "4", "8"], 4));

// console.log(
// 	atMostNGivenDigitSet(["1", "2", "3", "4", "7", "8", "9"], 32901345)
// );
