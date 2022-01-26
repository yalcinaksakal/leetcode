/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
	const par = [];
	let reversed = "",
		l;

	for (let i = 0; i < s.length; i++) {
		reversed += s[i];
		if (s[i] == "(") par.push(i);
		else if (s[i] == ")") {
			l = i - par.pop() + 1;
			reversed =
				reversed.slice(0, reversed.length - l) +
				reversed
					.slice(reversed.length - l)
					.split("")
					.reverse()
					.join("");
		}
	}
	let res = "";
	for (const c of reversed) if (c != "(" && c != ")") res += c;
	return res;
};
console.log(reverseParentheses("a(bcdefghijkl(mno)p)q"));
// "apmnolkjihgfedcbq"
