/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation1 = function (n, k) {
	const nums = Array(n)
		.fill()
		.map((_, i) => i + 1);
	const cur = [];
	let count = 0,
		res;

	const permute = () => {
		if (cur.length === nums.length) {
			if (++count == k) res = cur.join("");
			return;
		}
		for (let i = 0; i < nums.length; i++) {
			if (!nums[i]) continue;
			cur.push(nums[i]);
			nums[i] = 0;
			permute();
			if (res) return;
			nums[i] = cur.pop();
		}
	};
	permute();
	return res;
};

var getPermutation = function (n, k) {
	const nums = Array(n + 1)
			.fill()
			.map((_, i) => i),
		f = {};
	f[0] = 1;
	let res = "",
		cur;

	const factorial = n => {
		!f[n] && (f[n] = factorial(n - 1) * n);
		return f[n];
	};

	for (let i = 1; i <= n; i++) {
		cur = Math.ceil(k / factorial(n - i));
		k -= factorial(n - i) * (cur - 1);
		res += nums[cur];
		nums.splice(cur, 1);
	}
	return res;
};
console.log(getPermutation(3, 3));
