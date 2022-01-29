/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
	const s = arr.length / 20,
		e = arr.length - s;
	return (
		arr
			.sort((a, b) => a - b)
			.reduce((a, c, i) => (i >= s && i < e ? a + c : a), 0) /
		(e - s)
	);
};
