function solve(arr, queries) {
	// Write your code here
	const res = [],
		minMax = k => {
			let max = Math.max(...arr.slice(0, k)),
				min = max;
			for (let i = k; i < arr.length; i++) {
				max =
					arr[i - k] === max
						? Math.max(...arr.slice(i - k + 1, i + 1))
						: Math.max(max, arr[i]);
				min = Math.min(min, max);
			}
			return min;
		};

	for (const q of queries) res.push(minMax(q));
	return res;
}
