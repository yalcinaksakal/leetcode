/**
 * @param {number} n
 * @return {number}
 */

var nthUglyNumber = function (n) {
	let count = 1,
		res = 1,
		p2 = [2],
		p3 = [3],
		p5 = [5];

	while (count < n) {
		count++;
		res = Math.min(p2[0], p3[0], p5[0]);
		p2.push(res * 2);
		p3.push(res * 3);
		p5.push(res * 5);
		if (res === p2[0]) p2.shift();
		if (res === p3[0]) p3.shift();
		if (res === p5[0]) p5.shift();
	}

	return res;
};

var nthUglyNumber1 = function (n) {
	const isUgly = n => {
		while (!(n % 2 && n % 3 && n % 5)) {
			if (!(n % 2)) n /= 2;
			if (!(n % 3)) n /= 3;
			if (!(n % 5)) n /= 5;
		}
		return n === 1;
	};
	let count = 0,
		i = 0,
		res = 0;
	while (count < n) {
		i++;
		if (isUgly(i)) {
			console.log(i);
			res = i;
			count++;
		}
	}
	return res;
};
console.log(nthUglyNumber(11));
