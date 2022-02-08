/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (low = 100, high = 1000) {
	const box = {};
	let boxNo;

	const getNo = n => {
		let res = 0;
		while (n) {
			res += n % 10;
			n = Math.floor(n / 10);
		}
		return res;
	};
	for (let i = low; i <= high; i++) {
		boxNo = getNo(i);
		box[boxNo] ? box[boxNo]++ : (box[boxNo] = 1);
	}
	return Math.max(...Object.values(box));
};
