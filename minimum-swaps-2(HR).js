function minimumSwaps(arr) {
	const pos = {};
	for (let i = 0; i < arr.length; i++) pos[arr[i]] = i;
	let count = 0;
	for (let i = 0; i < arr.length; i++)
		if (arr[i] !== i + 1) {
			[arr[i], arr[pos[i + 1]]] = [arr[pos[i + 1]], arr[i]];
			pos[arr[pos[i + 1]]] = pos[i + 1];
			count++;
		}
	return count;
}
minimumSwaps([4, 3, 1, 2]);
