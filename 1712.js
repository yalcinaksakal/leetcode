/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function (nums) {
	let rightSum = 0,
		leftMostOfLeftWall,
		rightMostOfLeftWall,
		count = 0;
	const mod = 10 ** 9 + 7,
		preSum = [0],
		bs = (low, high, direction) => {
			//direction 1 = right, 0=left
			let mid;
			const highPreSum = preSum[high + 1],
				check = () =>
					direction
						? highPreSum - preSum[mid] >= preSum[mid]
						: rightSum < highPreSum - preSum[mid];
			while (low < high) {
				mid = (low + high) >>> 1;
				check() ? (low = mid + 1) : (high = mid);
			}
			direction
				? highPreSum - preSum[low] < preSum[low] && low--
				: rightSum < highPreSum - preSum[low] && low++;
			return low;
		};
	for (const num of nums) preSum.push(preSum[preSum.length - 1] + num);

	for (let i = nums.length - 1; i > 1; i--) {
		rightSum += nums[i];
		leftMostOfLeftWall = bs(1, i - 1, 0);
		if (
			leftMostOfLeftWall === i ||
			preSum[leftMostOfLeftWall] > preSum[i] - preSum[leftMostOfLeftWall]
		)
			continue;
		rightMostOfLeftWall = bs(leftMostOfLeftWall, i - 1, 1);
		count = (count + rightMostOfLeftWall - leftMostOfLeftWall + 1) % mod;
	}
	return count;
};
// waysToSplit([7, 0, 5]);
// waysToSplit([2, 3, 5, 10]);
waysToSplit([1, 2, 2, 2, 5, 0]);
