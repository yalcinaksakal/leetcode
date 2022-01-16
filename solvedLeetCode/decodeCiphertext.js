/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function (encodedText, rows) {
	const n = encodedText.length / rows,
		dp = {};
	for (let i = 0; i < rows; ) dp[i++] = {};

	let i = rows - 1,
		j = n - 1,
		res = "",
		start = 0;
	for (let ch = encodedText.length - 1; ch > -1; ch--) {
		dp[i][j--] = encodedText[ch];
		if (j < 0) {
			j = n - 1;
			i--;
		}
	}

	i = 0;
	j = 0;
	while (j < n) {
		res += dp[i++][j++];
		if (i == rows) {
			i = 0;
			j = ++start;
		}
	}

	return res.trimEnd();
};
console.log(decodeCiphertext(" b  ac", 2));
