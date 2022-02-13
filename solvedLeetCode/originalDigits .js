/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
	const freq = {},
		nums = [
			"zero",
			"two",
			"six",
			"eight",
			"four",
			"one",
			"five",
			"seven",
			"three",
			"nine",
		],
		digits = [0, 2, 6, 8, 4, 1, 5, 7, 3, 9],
		allChars = [
			"e",
			"g",
			"f",
			"i",
			"h",
			"o",
			"n",
			"s",
			"r",
			"u",
			"t",
			"w",
			"v",
			"x",
			"z",
		];
	let res = "",
		count,
		c;
	for (c of allChars) freq[c] = 0;
	for (c of s) freq[c]++;

	for (let i = 0; i < 10; i++) {
		count = freq[nums[i][0]];
		for (let j = 1; j < nums[i].length; j++)
			count = Math.min(count, freq[nums[i][j]]);
		if (!count) continue;
		res += (digits[i] + "").repeat(count);
		for (c of nums[i]) freq[c] -= count;
	}
	return res
		.split("")
		.sort((a, b) => +a - b)
		.join("");
};
console.log(originalDigits("zeroonetwothreefourfivesixseveneightnine"));
