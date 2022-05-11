/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
	let res = 0;
	const dfs = (vowel, chars) => {
		if (chars === n) res++;
		else for (let v = vowel; v < 6; v++) dfs(v, chars + 1);
	};
	dfs(1, 0);
	return res;
};
console.log(countVowelStrings(1));
