function flippingBits(n) {
	// Write your code here
	n = n.toString(2);
	return parseInt(
		("0".repeat(32 - n.length) + n)
			.split("")
			.map(c => 1 - c)
			.join(""),
		2
	);
}

flippingBits(1);
