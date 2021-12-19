/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	if (nums.length < 2) return 0;

	let bfs = [0],
		children = new Set();

	let i = 0,
		step = 0,
		cur;

	while (true) {
		cur = bfs.shift();

		for (let i = 1; i <= nums[cur]; i++) {
			if (cur + i === nums.length - 1) return step + 1;
			children.add(cur + i);
		}

		if (!bfs.length) {
			bfs = [...children];
			children = new Set();
			step++;
		}
	}
};

console.log(jump([2, 3, 1, 1, 4]));
