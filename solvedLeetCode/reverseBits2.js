/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

var reverseBits = function (n) {
	n = n.toString(2).split("").reverse();

	//n may not be 32 digits so pad the end
	while (n.length < 32) n.push("0");

	//convert to int
	return parseInt(n.join(""), 2);
};

var reverseBits1 = function (n) {
	let res = 0,
		bit;
	for (let i = 0; i < 32; i++) {
		bit = (n >>> i) & 1;
		res = res | (bit << (31 - i));
	}
	return res;
};
