/**
 * @param {number[]} seats
 * @return {number}
 */
const maxDistToClosest = function (seats) {
	let left = -1,
		max = 0,
		n = seats.length;

	for (i = 0; i < n; i++) {
		if (!seats[i]) continue;
		max = Math.max(max, left == -1 ? i : Math.floor((i - left) / 2));
		left = i;
	}

	if (!seats[n - 1]) max = Math.max(max, n - 1 - left);

	return max;
};

var maxDistToClosest = function (seats) {
	const n = seats.length,
		left = Array(n).fill(0),
		right = Array(n).fill(0);
	let l = -1,
		r = -1;

	for (let i = 0; i < n; i++) {
		if (seats[i]) l = i;
		else left[i] = l;

		if (seats[n - i - 1]) r = n - i - 1;
		else right[n - i - 1] = r;
	}

	let max = 0;

	for (let i = 0; i < n; i++) {
		if (seats[i]) continue;
		max = Math.max(
			max,
			Math.min(
				left[i] == -1 ? right[i] : i - left[i],
				right[i] == -1 ? n - left[i] - 1 : right[i] - i
			)
		);
	}

	return max;
};
console.log(maxDistToClosest([1, 0, 0, 0]));
