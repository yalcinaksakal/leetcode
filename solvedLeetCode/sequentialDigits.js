/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
	const res = [];

	let length = (low + "").length,
		num;

	const getNum = (s, l) => {
		if (l > 9) return -1;
		let n = "";
		for (let i = 0; i < l; i++) {
			if (s > 9) return -1;
			n += s;
			s++;
		}
		return n;
	};

	const nextNum = () => {
		let n = "";
		for (let i = 0; i < length; i++) n += "" + (+num[i] + 1);
		return n;
	};
	num = getNum(+(low + "")[0], length);
	if (num === -1) num = getNum(1, ++length);

	while (+num <= high) {
		if (+num >= low) res.push(+num);
		num = num[num.length - 1] === "9" ? getNum(1, ++length) : nextNum();
		if (num === -1) break;
	}

	return res;
};
sequentialDigits(8511, 23553);
