function maxValue(t) {
	// Write your code here
	const n = t.length;
	let substr,
		max = 0,
		delta,
		last = n;

	for (let length = 1; length <= last; length++) {
		const freq = {};
		for (let i = 0; i <= n - length; i++) {
			substr = t.slice(i, i + length);
			freq[substr] ? freq[substr]++ : (freq[substr] = 1);
			max = Math.max(max, freq[substr] * substr.length);
		}
		delta = ((n + 1) ** 2 - 4 * max) ** 0.5;
		last = (n + 1 + delta) / 2;
	}

	return max;
}

maxValue("tttttttt");
