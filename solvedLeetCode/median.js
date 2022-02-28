function findMedian(arr) {
	// Write your code here
	arr.sort((a, b) => a - b);
	return arr[arr.length >>> 1];
}
