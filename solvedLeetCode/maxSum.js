function maximumSum(a, m) {
	// Write your code here
	let max = a[0] % m,
		min = a[0] % m;
	(pos = 0), (neg = 0);
	for (const num of a) {
		cur = Math.max((cur + num) % m, num % m);
		if (cur > max) max = cur;
	}
	return max;
}

maximumSum([3, 3, 9, 9, 5], 7);
