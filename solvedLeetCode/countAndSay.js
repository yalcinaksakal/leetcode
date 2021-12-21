/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
	if (n === 1) return "1";

	let prev = countAndSay(n - 1);

	let count = 0,
		res = "";
	prev += ".";

	for (let i = 0; i < prev.length - 1; i++) {
		count++;
		if (prev[i] === prev[i + 1]) continue;
		res += count + prev[i];
		count = 0;
	}

	return res;
};
