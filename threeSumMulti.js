/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
	let res = 0;
	const freq = {},
		mod = 10 ** 9 + 7,
		count = (i, j, k) =>
			(freq[i] *
				(i === j
					? (freq[i] - 1) * (j === k ? (freq[i] - 2) / 6 : freq[k] / 2)
					: freq[j] * (j === k ? (freq[j] - 1) / 2 : freq[k]))) %
			mod;

	for (const num of arr) freq[num] ? freq[num]++ : (freq[num] = 1);

	for (let i = 0; i < 101 && i <= target; i++)
		for (let j = i; j < 101 && i + j <= target; j++)
			for (let k = j; k < 101 && i + j + k <= target; k++)
				if (freq[i] && freq[j] && freq[k] && i + j + k === target)
					res += count(i, j, k);
	return res;
};
threeSumMulti([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8);
