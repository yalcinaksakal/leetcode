const letterCombinations = digits => {
	if (!digits) return [""];

	const keys = [
		"",
		"",
		["a", "b", "c"],
		["d", "e", "f"],
		["g", "h", "i"],
		["j", "k", "l"],
		["m", "n", "o"],
		["p", "q", "r", "s"],
		["t", "u", "v"],
		["w", "x", "y", "z"],
	];

	let allComb = [],
		cur = [];

	digits = digits.split("");

	const getCombs = () => {
		if (!digits.length) {
			allComb.push(cur.join(""));
			return;
		}

		let digit = +digits.shift();

		keys[digit].forEach(ch => {
			cur.push(ch);
			getCombs();
			cur.pop();
		});

		digits.unshift(digit);
	};

	getCombs();
	return allComb;
};

letterCombinations("234");
