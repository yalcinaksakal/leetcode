/**
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function (arr) {
	const indicesOfNum = {},
		intervals = Array(arr.length).fill(0);
	let preSum, sum;
	for (let i = 0; i < arr.length; i++)
		indicesOfNum[arr[i]]
			? indicesOfNum[arr[i]].push(i)
			: (indicesOfNum[arr[i]] = [i]);
	for (const indices of Object.values(indicesOfNum))
		if (indices.length > 1) {
			preSum = { [-1]: 0 };
			sum = 0;
			for (let i = 0; i < indices.length; i++) preSum[i] = sum += indices[i];
			for (let i = 0; i < indices.length; i++)
				intervals[indices[i]] =
					sum - 2 * preSum[i - 1] + indices[i] * (2 * i - indices.length);
		}
	return intervals;
};
getDistances([2, 1, 3, 1, 2, 3, 3]);
