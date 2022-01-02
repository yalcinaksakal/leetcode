/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
	const freq = {};
	for (const num of arr) freq[num] ? freq[num]++ : (freq[num] = 1);

	const freqSet = new Set();

	for (const f of Object.values(freq)) {
		if (freqSet.has(f)) return false;
		freqSet.add(f);
	}

	return true;
};
