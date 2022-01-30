/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
	let max = 0,
		hPrev;
	const stack = [{ i: 0, h: heights[0] }],
		n = heights.length;

	for (let i = 1; i < n; i++) {
		const h = heights[i];
		if (h < stack[stack.length - 1].h) {
			while (stack.length && h < stack[stack.length - 1].h) {
				hPrev = stack.pop();
				max = Math.max(max, hPrev.h * (i - hPrev.i));
			}
			stack.push({ i: hPrev.i, h });
		} else if (h > stack[stack.length - 1].h) stack.push({ i, h });
	}
	while (stack.length) {
		hPrev = stack.pop();
		max = Math.max(max, (n - hPrev.i) * hPrev.h);
	}
	return max;
};

largestRectangleArea([2, 4]);
