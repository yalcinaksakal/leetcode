function insertionSort(arr) {
	// Write your code here
	let shifts = 0;
	const heap = [],
		insert = val => {
			let low = 0,
				high = heap.length - 1,
				mid;
			while (low < high) {
				mid = (low + high) >>> 1;
				if (heap[mid] > val) low = mid + 1;
				else high = mid;
			}
			if (low === heap.length - 1 && val < heap[heap.length - 1]) low++;
			heap.splice(low, 0, val);
			shifts += low;
		};
	for (const num of arr) insert(num);
	return shifts;
}

insertionSort([2, 1, 3, 1, 2]);
