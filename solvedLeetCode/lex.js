function morganAndString(a, b) {
	let prev = {};

	for (let i = 0; i <= b.length; i++) prev[i] = b.slice(i);

	for (let i = a.length - 1; i > -1; i--) {
		const cur = {};
		cur[b.length] = a.slice(i);
		for (let j = b.length - 1; j > -1; j--)
			if (a[i] < b[j]) cur[j] = a[i] + prev[j];
			else if (a[i] > b[j]) cur[j] = b[j] + cur[j + 1];
			else cur[j] = a[i] + (cur[j + 1] < prev[j] ? cur[j + 1] : prev[j]);
		prev = cur;
	}
	return prev[0];
}
morganAndString("ACDAN", "DANIEL");
//     B C F
// A
// C
// A   ABCF ACF AF
