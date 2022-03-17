/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
	let num, popped;
	const stack = [],
		pop = () => {
			num = 0;
			while (true) {
				popped = stack.pop();
				if (!popped) break;
				num += popped;
			}
			stack.push(num ? 2 * num : 1);
		};

	for (const ch of s) ch === "(" ? stack.push(0) : pop();

	return stack.reduce((a, c) => a + c, 0);
};
scoreOfParentheses("(()()())");
