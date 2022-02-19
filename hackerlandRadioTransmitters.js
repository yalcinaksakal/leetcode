function hackerlandRadioTransmitters(x, k) {
	// Write your code here
	x = Array.from(new Set(x)).sort((a, b) => a - b);
	let i = 0,
		count = 0,
		range;
	while (i < x.length) {
		count++;
		range = x[i] + k;
		while (x[i] <= range) i++;
		if (i < x.length) {
			range = x[i - 1] + k;
			while (x[i] <= range) i++;
		}
	}
	return count;
}

hackerlandRadioTransmitters([7, 2, 4, 6, 5, 9, 12, 11], 2);
