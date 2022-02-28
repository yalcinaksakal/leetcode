function stones(n, a, b) {
	// Write your code here
	if (a === b) return [(n - 1) * a];
	if (a > b) [a, b] = [b, a];
	const res = [];
	n--;

	let c = n;
	while (c > -1) {
		res.push(a * c + b * (n - c));
		c--;
	}

	return res;
}
console.log(stones(2, 1, 1));
