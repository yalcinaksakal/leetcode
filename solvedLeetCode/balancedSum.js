function balancedSums(arr) {
	// Write your code here
	const total = arr.reduce((a, c) => a + c, 0);
	let sum = 0;
	for (const num of arr) {
		if (sum === (total - num) / 2) return "YES";
		sum += num;
	}
	return "NO";
}
