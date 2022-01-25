/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (s) {
	const vowels = { a: 1, A: 1, e: 1, E: 1, i: 1, I: 1, o: 1, O: 1, u: 1, U: 1 };
	s = s.split(" ");

	for (let i = 0; i < s.length; i++)
		s[i] =
			(vowels[s[i][0]] ? s[i] + "ma" : s[i].slice(1) + s[i][0] + "ma") +
			"a".repeat(i + 1);
	return s.join(" ");
};
