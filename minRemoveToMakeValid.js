/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
	const invalids = [],
		parStack = [];

	s = s.split("");

	for (let i = 0; i < s.length; i++) {
		if (s[i] == "(") parStack.push(i);
		else if (s[i] == ")") {
			pop = parStack.pop();
			if (pop == undefined) invalids.push(i);
		}
	}

	while (parStack.length) invalids.push(parStack.pop());

	invalids.forEach(i => (s[i] = "-"));
	return s.join("").replace(/-/g, "");
};
