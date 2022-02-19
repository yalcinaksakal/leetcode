function maxSubarrayValue(arr) {
	// Write your code here
	for (let i = 1; i < arr.length; i += 2) arr[i] *= -1;
	let max = arr[0],
		posSum = 0,
		min = arr[0],
		negSum = 0;

	for (const num of arr) {
		if (posSum < 0) posSum = 0;
		if (negSum > 0) negSum = 0;
		posSum += num;
		negSum += num;
		if (posSum > max) max = posSum;
		if (negSum < min) min = negSum;
	}

	return Math.max(max, Math.abs(min)) ** 2;
}

maxSubarrayValue([6, 3, -1, -1, -1, 5, 1]);
