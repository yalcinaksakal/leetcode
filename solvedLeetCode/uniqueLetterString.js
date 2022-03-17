/**
 * @param {string} s
 * @return {number}
 */

/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function (s) {
	let res = 0,
		dp = 0,
		chIndex;
	const first = Array(26).fill(0),
		second = Array(26).fill(0);

	for (let i = 0; i < s.length; i++) {
		chIndex = s.charCodeAt(i) - 65;
		dp += 1 + i - first[chIndex] * 2 + second[chIndex];
		res = res + dp;
		second[chIndex] = first[chIndex];
		first[chIndex] = i + 1;
	}

	return res;
};
uniqueLetterString("ABCA");
var uniqueLetterString1 = function (s) {
	let res = s.length;
	const preSum = {},
		count = (left, right) => {
			for (let i = 0; i < 27; i++)
				if (preSum[right][i] - preSum[left - 1][i] === 1) res++;
		};

	preSum[-1] = Array(26).fill(0);
	for (let i = 0; i < s.length; i++) {
		preSum[i] = [...preSum[i - 1]];
		preSum[i][s.charCodeAt(i) - 65]++;
	}
	for (let length = 2; length <= s.length; length++)
		for (let j = 0; j < s.length - length + 1; j++) count(j, j + length - 1);
	return res;
};
