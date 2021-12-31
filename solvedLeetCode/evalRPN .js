/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
	const nums = [];
	const ops = ["-", "+", "*", "/"];
	let num;
	const calculate = (op, n2, n1) => {
		switch (op) {
			case "*":
				num = n1 * n2;
				break;
			case "/":
				num = Math.trunc(n1 / n2);
				break;
			case "+":
				num = n1 + n2;
				break;
			case "-":
				num = n1 - n2;
				break;
			default:
				break;
		}
		nums.push(num);
	};

	for (const op of tokens)
		if (ops.includes(op)) calculate(op, nums.pop(), nums.pop());
		else nums.push(+op);

	return nums[0];
};

console.log(
	evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
