/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
	const events = [],
		heights = [0],
		res = [],
		changeHeights = (h, type) => {
			let low = 0,
				high = heights.length - 1,
				mid;
			while (low < high) {
				mid = (low + high) >>> 1;
				if (heights[mid] > h) low = mid + 1;
				else high = mid;
			}
			if (type) {
				if (low === heights.length - 1 && h < heights[heights.length - 1])
					heights.push(h);
				else heights.splice(low, 0, h);
			} else heights.splice(low, 1);
		};
	for (const [l, r, h] of buildings) events.push([l, h, true], [r, h, false]);
	events.sort((a, b) => a[0] - b[0]);

	let i = 0,
		x;

	while (i < events.length) {
		x = events[i][0];
		while (i < events.length && events[i][0] === x)
			changeHeights(events[i][1], events[i++][2]);
		if (!res.length || res[res.length - 1][1] !== heights[0])
			res.push([x, heights[0]]);
	}
	return res;
};
