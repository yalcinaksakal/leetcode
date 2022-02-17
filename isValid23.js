function isValid(s) {
	// Write your code here
	const freq = {};
	let count = {},
		tmp;
	for (const ch of s) freq[ch] ? freq[ch]++ : (freq[ch] = 1);
	for (const c of Object.values(freq)) count[c] ? count[c]++ : (count[c] = 1);

	if (Object.values(count).length > 2) return "NO";
	if (Object.values(count).length === 1) return "YES";
	tmp = Object.values(count);
	if (tmp[0] !== 1 && tmp[1] !== 1) return "NO";
	tmp = Object.keys(count);
	if (
		Math.abs(+tmp[0] - tmp[1]) === 1 ||
		(+tmp[0] === 1 && count[tmp[0]] === 1) ||
		(+tmp[1] === 1 && count[tmp[1]] === 1)
	)
		return "YES";
	return "NO";
}
