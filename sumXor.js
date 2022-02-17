function sumXor(n) {
	// Write your code here
	if (!n) return 1;
	n = n.toString(2);
	let zeroBits = 0;
	while (n !== "0") {
		if (n[n.length - 1] === "0") zeroBits++;
		n = n.slice(0, n.length - 1);
	}
	return 2 ** zeroBits;
}
console.log(sumXor(1099511627776));
console.log(sumXor(0));
