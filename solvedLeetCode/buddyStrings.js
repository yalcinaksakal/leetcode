/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
	if (s.length != goal.length) return false;
	let same2 = false,
		notEq = -1,
		eq = 0;
	const ch = {};
	for (let i = 0; i < s.length; i++) {
		if (ch[s[i]]) same2 = true;
		else ch[s[i]] = true;

		if (s[i] == goal[i]) eq++;
		else if (notEq == -1) notEq = i;
		else if (s[i] != goal[notEq] || goal[i] != s[notEq]) return false;
	}

	return (s == goal && same2) || eq == s.length - 2;
};

buddyStrings("ab", "ba");
