/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
	let dir = 0,
		pos = [0, 0],
		dp = {},
		key,
		repeat = 0;
	dp["0,0,0"] = 1;
	const directions = [
		[1, 0],
		[0, 1],
		[-1, 0],
		[0, -1],
	];

	// visited = { "0,0": 1 };
	while (repeat < 4) {
		for (const i of instructions)
			if (i == "L" || i == "R") {
				i == "R" && dir++;
				i == "L" && dir--;
				dir = dir < 0 ? 3 : dir % 4;
			} else {
				pos = [pos[0] + directions[dir][0], pos[1] + directions[dir][1]];
			}
		key = `${pos[0]},${pos[1]},${dir}`;
		if (dp[key]) return true;
		dp[key] = 1;
		repeat++;
	}
	return false;
};

// console.log(isRobotBounded("GGLLGG"));
// console.log(isRobotBounded("GG"));
console.log(isRobotBounded("GL"));
console.log(isRobotBounded("GLGLGGLGL"));
