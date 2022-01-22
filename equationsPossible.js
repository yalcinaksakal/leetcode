/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
	const eq = {},
		notEq = [];
	let v,
		val = 1;

	for (const e of equations) {
		v = e.split("==");
		if (v.length == 2) {
			if (!eq[v[0]] && !eq[v[1]]) {
				eq[v[0]] = val;
				eq[v[1]] = val++;
			} else if (eq[v[0]] && !eq[v[1]]) eq[v[1]] = eq[v[0]];
			else if (!eq[v[0]] && eq[v[1]]) eq[v[0]] = eq[v[1]];
			else {
				const val = eq[v[1]];
				Object.entries(eq).forEach(item => {
					if (item[1] == val) eq[item[0]] = eq[v[0]];
				});
			}
		} else notEq.push(e.split("!="));
	}

	for (const [a, b] of notEq)
		if ((eq[a] != undefined && eq[a] == eq[b]) || a == b) return false;

	return true;
};

console.log(equationsPossible(["e!=c", "b!=b", "b!=a", "e==d"]));
