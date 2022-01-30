/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function (nums) {
	const m = nums.length,
		n = Math.floor(m / 2);
	const sum = nums.reduce((a, c) => a + c, 0);
	const isPos = (m, n, sum) => {
		for (let i = 0; i < n; i++) if (!((sum * i) % m)) return true;
		return false;
	};
	if (!isPos(m, n, sum)) return false;
	const sums = Array(n + 1)
		.fill()
		.map(() => new Set());
	sums[0].add(0);
	for (const num of nums)
		for (let i = n; i > 0; i--)
			sums[i - 1].forEach(s => {
				sums[i].add(s + num);
			});
	let res = false;
	for (let i = 1; i <= n; i++) {
		if (res) break;
		sums[i].forEach(s => {
			if ((sum * i) % m == 0 && (sum * i) / m == s) res = true;
		});
	}
	return res;
};

splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8]);
