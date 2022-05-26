/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
	const rusSize = { [-1]: 0 },
		n = envelopes.length;
	envelopes.sort((a, b) => {
		if (a[0] < b[0]) return -1;
		if (a[0] === b[0] && a[1] < b[1]) return -1;
		return 0;
	});
	for (let i = 0; i < n; i++) {
		!rusSize[i] && (rusSize[i] = 1);
		rusSize[i] = Math.max(rusSize[i], rusSize[i - 1]);
		for (let j = i + 1; j < n; j++)
			if (
				envelopes[i][0] < envelopes[j][0] &&
				envelopes[i][1] < envelopes[j][1]
			) {
				!rusSize[j] && (rusSize[j] = 0);
				rusSize[j] = Math.max(rusSize[j], 1 + rusSize[i]);
				break;
			}
	}
	return rusSize[n - 1];
};
maxEnvelopes([
	[4, 5],
	[4, 6],
	[6, 7],
	[2, 3],
	[1, 1],
]);
