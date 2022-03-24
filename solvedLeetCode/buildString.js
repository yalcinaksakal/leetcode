function buildString(a, b, s) {
	// Write your code here
	let cur = "",
		next,
		i = 0,
		cost = 0;
	while (i < s.length) {
		next = "";
		while (cur.includes(next + s[i])) next += s[i++];
		if (!next) {
			cur += s[i++];
			cost += a;
			continue;
		}
		cost += Math.min(a * next.length, b);
		cur += next;
	}
	console.log(cost);
	return cost;
}
buildString(8, 9, "bacbacacb");
