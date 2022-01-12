/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
	if (n < 2) return n;
	const lamps = Array(n + 1).fill(1);
	let round = 2;

	while (round < lamps.length) {
		for (let i = round; i < lamps.length; i += round) lamps[i] = 1 - lamps[i];
		round++;
	}

	return lamps.reduce((acc, cur) => (cur ? acc + 1 : acc), -1);
};

console.log(bulbSwitch(3));
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = n => Math.floor(n ** 0.5);

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	const l = strs.length;
	if (!l) return "";
	if (l == 1) return strs[0];

	let res = strs[0];

	for (let i = 1; i < l; i++) if (strs[i].length < res.length) res = strs[i];

	const getPrefix = s => {
		let i = 0;
		while (i < res.length && i < s.length && s[i] == res[i]) i++;
		return s.slice(0, i);
	};

	for (let i = 0; i < l; i++) {
		res = getPrefix(strs[i]);
		if (res == "") return res;
	}

	return res;
};
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let left = 0,
		right = height.length - 1,
		max = 0,
		min;

	while (left < right) {
		min = Math.min(height[left], height[right]);
		max = Math.max(max, (right - left) * min);

		min == height[left] ? left++ : right--;
	}

	return max;
};
