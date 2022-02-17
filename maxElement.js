//LC 1802

function maxElement(n, maxSum, k) {
	// Write your code here
	const left = k,
		right = n - k - 1;
	let low = 1,
		mid,
		high = maxSum,
		sum,
		leftSum,
		rightSum,
		res = 0;

	while (low <= high) {
		mid = (low + high) >>> 1;
		sum = mid;
		leftSum =
			(mid * (mid - 1)) / 2 +
			(left < mid ? (-(mid - left - 1) * (mid - left)) / 2 : left - mid + 1);
		rightSum =
			(mid * (mid - 1)) / 2 +
			(right < mid
				? (-(mid - right - 1) * (mid - right)) / 2
				: right - mid + 1);
		sum += leftSum + rightSum;
		if (sum <= maxSum) {
			res = mid;
			low = mid + 1;
		} else high = mid - 1;
	}

	return res;
}
