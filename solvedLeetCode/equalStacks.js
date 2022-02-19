function equalStacks(h1, h2, h3) {
	// Write your code here
	let commonSums;
	const getPostSum = (arr, type) => {
		const sums = {};
		let sum = 0;
		for (let i = arr.length - 1; i > -1; i--) {
			sum += arr[i];
			if (type || commonSums[sum]) sums[sum] = sum;
		}
		return sums;
	};
	commonSums = getPostSum(h1, true);
	commonSums = getPostSum(h2);
	commonSums = getPostSum(h3);
	commonSums[0] = 0;
	return Math.max(...Object.values(commonSums));
}

equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4, 1]);
