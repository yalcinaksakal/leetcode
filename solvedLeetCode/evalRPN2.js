/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
	const nums = [],
		ops = {
			["-"]: (n2, n1) => n1 - n2,
			["+"]: (n2, n1) => n1 + n2,
			["*"]: (n2, n1) => n1 * n2,
			["/"]: (n2, n1) => Math.trunc(n1 / n2),
		};

	for (const op of tokens)
		nums.push(ops[op] ? ops[op](nums.pop(), nums.pop()) : +op);

	return nums[0];
};

evalRPN(["4", "13", "5", "/", "+"]);
