const countSubarraysWithSumK = (nums, target) => {
	const n = nums.length,
		sums = {};
	let count = 0,
		sum = 0;
	for (let i = 0; i < n; i++) {
		sum += nums[i];
		sum == target && count++;
		sums[sum - target] && (count += sums[sum - target]);
		sums[sum] ? sums[sum]++ : (sums[sum] = 1);
	}
	return count;
};
countSubarraysWithSumK([5, 0, 5, 10, 3, 2, -15, 4], 0);
