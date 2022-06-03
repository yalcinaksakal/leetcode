/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
	const invalids = [],
		parStack = [],
		validCombinations = [],
		handleInvalids = (start, end, dir) => {
			const combs = new Set();
			for (
				let i = dir === 1 ? start : end;
				dir === 1 ? i <= end : i >= start;
				i += dir
			)
				if (s[i] === (dir === 1 ? ")" : "("))
					combs.add(s.slice(start, i) + s.slice(i + 1, end + 1));
			return Array.from(combs);
		};
	let start = 0,
		end = s.length - 1;
	for (let i = 0; i < s.length; i++)
		s[i] == "("
			? parStack.push(i)
			: s[i] == ")" && parStack.pop() == undefined && invalids.push(i);

	//Handle invalid closings
	for (const invalid of invalids) {
		validCombinations.push(handleInvalids(start, invalid, 1));
		start = invalid + 1;
	}
	//the interval between last invalid closing and first invalid opening is valid
	const validInterval = parStack.length
		? s.slice(start, parStack[0])
		: s.slice(start);
	validInterval && validCombinations.push([validInterval]);
	//Handle invalid openings
	while (parStack.length) {
		const invalid = parStack.pop();
		validCombinations.push(handleInvalids(invalid, end, -1));
		end = invalid - 1;
	}
	//join valid combinations
	let res = [""];
	for (const combs of validCombinations)
		res = res.flatMap(prevComb => combs.map(comb => prevComb + comb));
	return res;
};
console.log(removeInvalidParentheses("((r(()()("));
