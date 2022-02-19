function pairs(k, arr) {
	// Write your code here
	const comp = {},
		res = new Set();
	for (let i = 0; i < arr.length; i++) comp[arr[i]] = i;
	for (let i = 0; i < arr.length; i++)
		if (comp[arr[i] - k] !== undefined && i !== comp[arr[i] - k])
			res.add([arr[i], arr[i] - k].join(","));

	return res.size;
}

pairs(2, [1, 5, 3, 4, 2]);
