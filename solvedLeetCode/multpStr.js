/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
	let res = "",
		multiplier,
		j,
		l1,
		m,
		carry;
	const add = num => {
		let i = 1,
			digitSum,
			remainder = 0;
		const result = [],
			l1 = res.length,
			l2 = num.length;
		while (l1 - i >= 0 || l2 - i >= 0) {
			digitSum =
				(l1 - i >= 0 ? +res[l1 - i] : 0) +
				(l2 - i >= 0 ? +num[l2 - i] : 0) +
				remainder;
			remainder = digitSum > 9 ? 1 : 0;
			digitSum %= 10;
			result.unshift(digitSum);
			i++;
		}
		if (remainder) result.unshift(1);
		res = result.join("");
	};

	for (let i = num2.length - 1; i >= 0; i--) {
		multiplier = +num2[i];
		j = 0;
		l1 = num1.length - 1;
		m = "";
		carry = 0;
		while (l1 - j > -1) {
			carry += +num1[l1 - j] * multiplier;
			m = (carry % 10) + "" + m;
			carry = Math.floor(carry / 10);
			j++;
		}
		if (carry) m = carry + "" + m;

		res === "" ? (res = m) : add(m);
		num1 = num1 + "0";
	}

	res = res.split("");
	while (res[0] === "0" && res.length) res.shift();

	return res.length ? res.join("") : "0";
};
