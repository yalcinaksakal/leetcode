/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
	const stack = [];

	const decode = () => {
		let ch = "",
			repeat = "",
			num;

		while (ch[0] !== "[" && stack.length) ch = stack.pop() + ch;
		ch = ch.slice(1);

		while (true && stack.length) {
			num = stack.pop();
			if (isNaN(num)) {
				stack.push(num);
				break;
			}
			repeat = num + repeat;
		}

		stack.push(ch.repeat(+repeat));
	};

	for (const char of s)
		if (char !== "]") stack.push(char);
		else decode();

	return stack.join("");
};
console.log(decodeString("3[a]3[2[bc]]"));
