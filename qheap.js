function processData(input) {
	//Enter your code here
	input = input.split(/\r?\n/);
	input.shift();
	const heap = [],
		handleHeap = (val, type) => {
			let low = 0,
				high = heap.length - 1,
				mid;
			while (low < high) {
				mid = (low + high) >>> 1;
				if (heap[mid] > val) low = mid + 1;
				else high = mid;
			}
			if (type) {
				if (low === heap.length - 1 && val < heap[heap.length - 1])
					heap.push(val);
				else heap.splice(low, 0, val);
			} else heap.splice(low, 1);
		};

	for (let line of input) {
		line = line.split(" ");
		switch (+line[0]) {
			case 1:
				handleHeap(+line[1], true);
				break;
			case 2:
				handleHeap(+line[1]);
				break;
			case 3:
				console.log(heap[heap.length - 1]);
				break;
			default:
				break;
		}
	}
}
