/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function (n, k) {
	const res = [[]];
	let l;

	for (let i = 1; i <= n; i++) {
		l = res.length;
		for (let j = 0; j < l; j++) res[j].length < k && res.push([...res[j], i]);
	}
	// console.log(res);
	return res.filter(r => r.length === k);
};

var combine1 = function (n, k) {
	const res = [],
		cur = [];

	if (k > n) return res;

	const comb = (start = 1) => {
		if (cur.length === k) {
			res.push([...cur]);
			return;
		}

		for (let i = start; i <= n; i++) {
			cur.push(i);
			comb(i + 1);
			cur.pop();
		}
	};

	comb();
	console.log(res);
	return res;
};
console.log(combine(20, 16));
