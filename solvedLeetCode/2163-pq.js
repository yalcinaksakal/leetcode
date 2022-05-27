function PriorityQueue(comparator) {
	//...
	//For js pq :     https://myleetcode.vercel.app/editor?type=open&no=1439
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function (nums) {
	const n = nums.length / 3,
		buildMaxMinArrays = (start, dir, comparator) => {
			let sum = 0,
				peek;
			const pq = new PriorityQueue(comparator),
				minMaxSum = [],
				index = dir === 1 ? 0 : 2 * n,
				add = num => {
					sum += num - pq.poll();
					pq.add(num);
				};
			//add first n elements to pq for minSum
			//add last n elements to pq for maxSum
			//find initial sum as sum of added elements
			for (let i = index; i - index < n; i++) {
				pq.add(nums[i]);
				sum += nums[i];
			}
			//find minSum of n elements before index i and push it to minSum arr
			//find maxSum of n elements after index i and unshift it to maxSum arr
			for (let i = start; Math.abs(i - start) <= n; i += dir) {
				minMaxSum.push(sum);
				peek = pq.peek();
				//peek is max for dir=1, min for dir=-1
				//while finding minsum, if cur item is less than max we should remove max from pq and add cur
				//while finding maxsum, if cur item is bigger than min we should remove min from pq and add cur
				dir === 1
					? nums[i] < peek && add(nums[i])
					: nums[i] > peek && add(nums[i]);
			}
			//instead of unshifting an element into arr each time, reverse the array at the end.
			dir === -1 && minMaxSum.reverse();
			return minMaxSum;
		},
		minSum = buildMaxMinArrays(n, 1),
		maxSum = buildMaxMinArrays(2 * n - 1, -1, (a, b) => a < b);
	//return min of minsum[i]-maxsum[i]
	return maxSum.reduce(
		(acc, cur, i) => Math.min(acc, minSum[i] - cur),
		minSum[0] - maxSum[0]
	);
};
