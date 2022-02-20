function lilysHomework(arr) {
	const countShift = sorted => {
		const isVisited = Array(arr.length + 1).fill(false),
			numMap = {},
			pos = {};
		for (let i = 0; i < arr.length; i++) pos[arr[i]] = i;
		for (let i = 0; i < arr.length; i++) arr[pos[sorted[i]]] = i + 1;
		for (let i = 1; i < isVisited.length; i++) numMap[i] = arr[i - 1];

		let count = 0,
			next,
			swapPos;

		for (let i = 1; i <= arr.length; i++)
			if (!isVisited[i]) {
				isVisited[i] = true;
				if (i !== numMap[i]) {
					swapPos = numMap[i];
					while (!isVisited[swapPos]) {
						isVisited[swapPos] = true;
						next = numMap[swapPos];
						swapPos = next;
						++count;
					}
				}
			}

		return count;
	};

	return Math.min(
		countShift([...arr].sort((a, b) => a - b)),
		countShift([...arr].sort((a, b) => b - a))
	);
}
console.log(lilysHomework([7, 15, 12, 3]));
