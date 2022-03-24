/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
	let sum = n,
		dif,
		res = "";
	const chars = {};
	chars[0] = n;
	chars[25] = 0;

	while (sum < k) {
		chars[0]--;
		chars[25]++;
		sum += 25;
	}
	dif = sum - k;
	if (dif) {
		chars[25]--;
		chars[25 - dif] = 1;
	}

	for (let i = 0; i < 26; i++)
		if (chars[i]) res += String.fromCharCode(i + 97).repeat(chars[i]);
	return res;
};
getSmallestString(3, 27);
