/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
	const map = {};
	if (!k) {
		for (const num of nums) map[num] ? map[num]++ : (map[num] = 1);
		return Object.values(map).reduce((a, c) => (c > 1 ? a + 1 : a), 0);
	}

	let res = 0;
	nums.forEach(num => !map[num] && (map[num] = true));
	Object.keys(map).forEach(num => map[+num - k] && res++);

	return res;
};
