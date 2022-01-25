/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
	const bitCount = n => {
		n = n - ((n >> 1) & 0x55555555);
		n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
		return (((n + (n >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24;
	};
	arr.sort((a, b) => {
		const ba = bitCount(a),
			bb = bitCount(b);
		if (ba < bb) return -1;
		if (ba == bb && a < b) return -1;
	});
	return arr;
};
