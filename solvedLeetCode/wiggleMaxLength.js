/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
	let pos = 1,
		neg = 1,
		prevP,
		prevN;

	for (let i = 1; i < nums.length; i++) {
		prevP = pos;
		prevN = neg;
		if (nums[i] > nums[i - 1]) pos = prevN + 1;
		else if (nums[i] < nums[i - 1]) neg = prevP + 1;
	}

	return Math.max(pos, neg);
};

var wiggleMaxLength1 = function (nums) {
	const n = nums.length,
		pos = Array(n).fill(1),
		neg = Array(n).fill(1);

	for (let i = 1; i < nums.length; i++)
		for (let j = 0; j < i; j++)
			if (nums[i] > nums[j]) pos[i] = Math.max(pos[i], neg[j] + 1);
			else if (nums[i] < nums[j]) neg[i] = Math.max(neg[i], pos[j] + 1);

	return Math.max(pos[n - 1], neg[n - 1]);
};
