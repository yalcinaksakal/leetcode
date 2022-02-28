function maximizingXor(l, r) {
	// Write your code here
	let max = r ^ r;
	for (let i = l; i < r; i++) {
		max = Math.max(max, i ^ i, i ^ (i + 1));
	}
	return max;
}
