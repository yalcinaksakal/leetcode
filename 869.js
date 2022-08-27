/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
	const getMax = num =>
			+[...(num + "")]
				.map(digit => +digit)
				.sort((a, b) => b - a)
				.join(""),
		max = getMax(n),
		min = (() => {
			const res = [...(max + "")].reverse();
			if (res[0] === "0") {
				res[0] = res[1];
				res[1] = "0";
			}
			return +res.join("");
		})(),
		canBeConstructedFromN = num => max === getMax(num);
	let powOf2 = 1;
	while (powOf2 <= max) {
		if (powOf2 >= min && canBeConstructedFromN(powOf2)) return true;
		powOf2 *= 2;
	}
	return false;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf22 = function (n) {
	const getMax = num => +[...(num + "")].sort((a, b) => b - a).join(""),
		max = getMax(n);
	let powOf2 = 1;
	while (powOf2 <= max) {
		if (max === getMax(powOf2)) return true;
		powOf2 *= 2;
	}
	return false;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf222 = function (n) {
	const getMax = num => +[...(num + "")].sort((a, b) => b - a).join("");
	n = getMax(n);
	let powOf2 = 1;
	while (powOf2 <= n) {
		if (n === getMax(powOf2)) return true;
		powOf2 *= 2;
	}
	return false;
};
reorderedPowerOf2(1024123);
