function maximumToys(prices, k) {
	// Write your code here
	prices.sort((a, b) => a - b);
	let count = 0;
	for (const toy of prices) {
		k -= toy;
		if (k >= 0) count++;
		if (k <= 0) break;
	}
	return count;
}
