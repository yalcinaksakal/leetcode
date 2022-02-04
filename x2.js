/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function (exp) {
	const concat = (set1, set2) => {
		const res = new Set();
		set1.forEach(el1 => set2.forEach(el2 => res.add(el1 + el2)));
		return res;
	};

	const handleExp = start => {
		if (start == exp.length) return { set: new Set(), end: start };
		let elSet = new Set();
		let j = start;
		let el = "";
		while (j < exp.length && exp[j] != "}") {
			switch (exp[j]) {
				case "{":
					const next = handleExp(j + 1);
					if (!j || exp[j - 1] == "," || exp[j - 1] == "{")
						next.set.forEach(el => elSet.add(el));
					else if (exp[j - 1] == "}") elSet = concat(elSet, next.set);
					else {
						concat(new Set(el), next.set).forEach(el => elSet.add(el));
						el = "";
					}
					j = next.end;
					continue;
				case ",":
					if (el) {
						elSet.add(el);
						el = "";
					}
					break;
				default:
					el += exp[j];
					break;
			}
			j++;
		}
		if (el) elSet.add(el);
		return { set: elSet, end: j + 1 };
	};
	return Array.from(handleExp(0).set).sort((a, b) => (a < b ? -1 : 0));
};
console.log(braceExpansionII("{a,b}c{d,e}f"));
