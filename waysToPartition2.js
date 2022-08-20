/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var waysToPartition = function (nums, k) {
	let count = 0,
		sum = 0;
	const prefixSumsPos = {},
		getPartitions = (sum, index, isPrev) => {
			if (!prefixSumsPos[sum] || index < 0) return;
			//binary search
			let low = 0,
				mid,
				high = prefixSumsPos[sum].length - 1;
		};

	for (let i = 0; i < nums.length - 1; i++) {
		sum += nums[i];
		prefixSumsPos[sum]
			? prefixSumsPos[sum].push(i + 1)
			: (prefixSumsPos[sum] = [i + 1]);
	}
	const numsSum = sum + nums[nums.length - 1];
	//check for possible partitions without changing any element to k
	count = prefixSumsPos[numsSum / 2] ? prefixSumsPos[numsSum / 2].length : 0;
	for (let i = 0; i < nums.length; i++) {
		sum = numsSum + k - nums[i];
		//if we change ith num to k sums for previous indices won't change.
		//if we have half of the new sum before current index we should add it as a patition.
		getPartitions(sum / 2, i, true);
		//Sums for current index and following indices will increase by k-nums[i]
		// x + k - nums[i] = sum / 2
		// if we have x in prefixSumsPos, we should add the indices which are higher or equal to current index i, as partitions
		getPartitions((numsSum - k + nums[i]) / 2, i, false);
	}

	console.log(prefixSumsPos, count);
};

waysToPartition([22, 4, -25, -20, -15, 15, -16, 7, 19, -10, 0, -13, -14], -33);
waysToPartition([0, 0, 0, 0], 5);
