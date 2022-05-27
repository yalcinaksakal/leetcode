function PriorityQueue(comparator) {
	//...
	//For js pq :     https://myleetcode.vercel.app/editor?type=open&no=1439
}
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

			for (let i = index; i - index < n; i++) {
				pq.add(nums[i]);
				sum += nums[i];
			}
			for (let i = start; Math.abs(i - start) <= n; i += dir) {
				minMaxSum.push(sum);
				peek = pq.peek();

				dir === 1
					? nums[i] < peek && add(nums[i])
					: nums[i] > peek && add(nums[i]);
			}
			dir === -1 && minMaxSum.reverse();
			return minMaxSum;
		},
		minSum = buildMaxMinArrays(n, 1),
		maxSum = buildMaxMinArrays(2 * n - 1, -1, (a, b) => a < b);
	return maxSum.reduce(
		(acc, cur, i) => Math.min(acc, minSum[i] - cur),
		minSum[0] - maxSum[0]
	);
};
