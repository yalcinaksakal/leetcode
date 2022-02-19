/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function (n, startPos, s) {
	const res = [],
		x = startPos[0],
		y = startPos[1],
		dir = {
			L: { x: 0, y: -1 },
			R: { x: 0, y: 1 },
			D: { x: 1, y: 0 },
			U: { x: -1, y: 0 },
		},
		visit = (x, y, i) => {
			if (x < 0 || y < 0 || x == n || y == n) return -1;
			if (i == s.length) return 0;
			return 1 + visit(x + dir[s[i]].x, y + dir[s[i]].y, i + 1);
		};
	for (let i = 0; i < s.length; i++) res.push(visit(x, y, i));
	return res;
};
console.log(executeInstructions(3, [0, 1], "RRDDLU"));
