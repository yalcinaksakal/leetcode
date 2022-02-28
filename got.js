function gameOfThrones(s) {
	const chars = {};
	let doubles = 0;

	for (const ch of s)
		if (chars[ch]) {
			chars[ch] % 2 && doubles++;
			chars[ch]++;
		} else chars[ch] = 1;

	doubles *= 2;

	return (s.length > doubles ? doubles + 1 : doubles) === s.length
		? "YES"
		: "NO";
}
