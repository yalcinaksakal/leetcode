/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
var minimumJumps = function (forbidden, a, b, x) {
	if (!x) return 0;
	forbidden = new Set(forbidden);
	//memorize whether position-isJumpedBack is visited
	const memo = { ["0-false"]: true },
		bfs = [[0, false]],
		jump = (pos, isJumpedBack) => {
			if (
				pos < 6000 &&
				pos > -1 &&
				!forbidden.has(pos) &&
				!memo[pos + "-" + isJumpedBack]
			) {
				memo[pos + "-" + isJumpedBack] = true;
				bfs.push([pos, isJumpedBack]);
			}
		};
	let jumps = 0,
		i = -1;
	while (++i < bfs.length) {
		jumps++;
		bfs.push(null);
		while (bfs[i]) {
			const [pos, isJumpedBack] = bfs[i++];
			if (pos + a === x || (!isJumpedBack && pos - b === x)) return jumps;
			jump(pos + a, false);
			!isJumpedBack && jump(pos - b, true);
		}
	}
	return -1;
};
