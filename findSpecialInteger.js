/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
	const q = arr.length / 4;
	const freq = {};
	for (const num of arr) {
		freq[num] ? freq[num]++ : (freq[num] = 1);
		if (freq[num] > q) return num;
	}
};
