/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const searchMatrix = (matrix, target) => {
	const search = (c, r = 0) => {
		if (!c && r < 0) return false;
		let low = 0,
			mid,
			high = c ? matrix.length - 1 : matrix[0].length - 1;

		const check = () => (c ? matrix[mid][0] < target : matrix[r][mid] < target);

		while (low < high) {
			mid = (low + high) >>> 1;
			if (check()) low = mid + 1;
			else high = mid;
		}

		return c
			? matrix[low][0] > target
				? low - 1
				: low
			: matrix[r][low] === target;
	};

	return search(false, search(true));
};

var searchMatrix1 = function (matrix, target) {
	const flat = matrix.flat();

	let low = 0,
		mid,
		high = flat.length - 1;

	while (low < high) {
		mid = (low + high) >>> 1;
		if (flat[mid] < target) low = mid + 1;
		else high = mid;
	}
	return flat[low] === target;
};

console.log(
	searchMatrix(
		[
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 60],
		],
		80
	)
);
