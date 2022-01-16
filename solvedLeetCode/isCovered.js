/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
	const nums = {};
	right++;
	for (let i = left; i < right; i++) nums[i] = i;
	const n = right - left;
	let deleted = 0;

	for (const [s, e] of ranges)
		for (const val of Object.values(nums))
			if (val >= s && val <= e) {
				deleted++;
				if (deleted == n) return true;
				delete nums[val];
			}

	return false;
};

console.log(
	isCovered(
		[
			[1, 2],
			[3, 4],
			[5, 6],
		],
		2,
		5
	)
);
