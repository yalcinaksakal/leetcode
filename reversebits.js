/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
	let res = 0,
		bit;
	for (let i = 0; i < 32; i++) {
		bit = (n >>> i) & 1;
		res = res | (bit << (31 - i));
	}
	return res;
};

reverseBits(4294967293);
