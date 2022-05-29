/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers1 = function (n) {
	const isNoZeros = num => {
		num = (num + "").split("");
		for (const d of num) if (d === "0") return false;
		return true;
	};
	for (let i = 1; i < n; i++)
		if (isNoZeros(i) && isNoZeros(n - i)) return [i, n - i];
};

var getNoZeroIntegers = function (n) {
	const doesHaveZero = num => new Set((num + "").split("")).has("0");
	for (let i = 1; i < n; i++) {
		if (doesHaveZero(i) || doesHaveZero(n - i)) continue;
		return [i, n - i];
	}
};
