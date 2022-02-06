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
					if (
						next.end < exp.length &&
						exp[next.end] != "," &&
						exp[next.end] != "}"
					) {
						const tmpSet = handleExp(next.end);
						next.set = concat(next.set, tmpSet.set);
						next.end = tmpSet.end;
					}
					el && (next.set = concat(new Set([el]), next.set));
					next.set.forEach(el => elSet.add(el));
					el = "";
					j = next.end;
					if (exp[start - 1] != "{") return { set: elSet, end: j };
					continue;
				case ",":
					if (el) {
						elSet.add(el);
						if (exp[start - 1] != "{") return { set: elSet, end: j };
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
		return { set: elSet, end: j + (exp[start - 1] == "{" ? 1 : 0) };
	};
	return Array.from(handleExp(0).set).sort((a, b) => (a < b ? -1 : 0));
};
console.log(
	braceExpansionII("n{{c,g},{h,j},l}a{{a,{x,ia,o},w},er,a{x,ia,o}w}n")
);
