/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
	if (nums.length < 2) return 0;

	const min = Math.min(...nums),
		l = nums.length,
		max = Math.max(...nums);
	const bucketSize = (max - min) / (l - 1);

	let i,
		buckets = {};
	for (const num of nums) {
		i = num === max ? l - 1 : Math.floor((num - min) / bucketSize);
		buckets[i] ? buckets[i].push(num) : (buckets[i] = [num]);
	}
	let maxDif = 0;
	buckets = Object.values(buckets).map(arr => [
		Math.min(...arr),
		Math.max(...arr),
	]);

	for (i = 1; i < buckets.length; i++)
		maxDif = Math.max(maxDif, buckets[i][0] - buckets[i - 1][1]);
	return maxDif;
};
