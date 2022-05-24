/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} myBoxes
 * @return {number}
 */
var maxCandies = function (status, candies, keys, containedBoxes, myBoxes) {
	let count = 0,
		box;
	const myKeys = {},
		watingForKey = {},
		add = box => {
			count += candies[box];
			watingForKey[box] = false;
		};
	for (let i = 0; i < myBoxes.length; i++) {
		box = myBoxes[i];
		status[box] || myKeys[box] ? add(box) : (watingForKey[box] = true);
		keys[box].forEach(k => {
			watingForKey[k] && add(k);
			myKeys[k] = true;
		});
		myBoxes.push(...containedBoxes[box]);
	}
	return count;
};
maxCandies(
	[1, 0, 1, 0],
	[7, 5, 4, 100],
	[[3], [], [1], []],
	[[1, 2], [3], [], []],
	[0]
);
