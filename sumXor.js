function sumXor(n) {
	// Write your code here
	let zeroBits = 0;
	while (n > 0) {
		if ((n & 1) === 0) zeroBits++;
		n >>= 1;
	}
	return 1 << zeroBits;
}
