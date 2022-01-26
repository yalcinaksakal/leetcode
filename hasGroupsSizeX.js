/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
	let freq = {},
		check;
	for (const c of deck) freq[c] ? freq[c]++ : (freq[c] = 1);
	freq = Object.values(freq);
	const min = Math.min(...freq);

	for (let i = 2; i <= min; i++) {
		check = true;
		for (let j = 0; j < freq.length; j++)
			if (freq[j] % i) {
				check = false;
				break;
			}
		if (check) return true;
	}
	return false;
};
