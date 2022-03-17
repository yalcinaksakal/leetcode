/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
	const digitSums = {},
		addDigits = x => (x + "").split("").reduce((a, c) => +c + a, 0);
	let sum = 0;

	for (let i = 1; i <= n; i++) {
		sum = i % 10 ? sum + 1 : addDigits(i);
		digitSums[sum] ? digitSums[sum]++ : (digitSums[sum] = 1);
	}
	const maxSize = Math.max(...Object.values(digitSums));
	return Object.values(digitSums).reduce(
		(a, c) => (c === maxSize ? a + 1 : a),
		0
	);
};
