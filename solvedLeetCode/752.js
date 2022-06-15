/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
	let step = 0,
		i = -1,
		cur,
		tmp;
	const bfs = ["0000"],
		tried = new Set(deadends),
		pusher = chipher => {
			if (tried.has(chipher)) return false;
			if (chipher === target) return true;
			tried.add(chipher);
			bfs.push(chipher);
			return false;
		};
	if (target === "0000") return 0;
	if (tried.has("0000")) return -1;
	tried.add("0000");
	while (++i < bfs.length) {
		bfs.push(null);
		step++;
		while (bfs[i]) {
			cur = bfs[i++].split("");
			for (let i = 0; i < 4; i++) {
				tmp = +cur[i];
				cur[i] = (tmp + 1) % 10;
				if (pusher(cur.join(""))) return step;
				cur[i] = !tmp ? 9 : tmp - 1;
				if (pusher(cur.join(""))) return step;
				cur[i] = tmp;
			}
		}
	}
	return -1;
};
