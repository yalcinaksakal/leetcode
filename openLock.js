/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
	let step = 0,
		cur,
		tmp,
		j = 0;
	const que = ["0000", null],
		tried = {},
		pusher = chipher => {
			if (chipher == target) return true;
			if (!tried[chipher]) {
				tried[chipher] = true;
				que.push(chipher);
			}
			return false;
		};
	for (const d of deadends) tried[d] = true;
	if (target == "0000") return 0;
	if (tried["0000"]) return -1;
	tried["0000"] = true;

	while (j < que.length) {
		cur = que[j++];
		if (!cur) {
			step++;
			if (j < que.length) que.push(null);
			continue;
		}

		cur = cur.split("");
		for (let i = 0; i < 4; i++) {
			tmp = +cur[i];
			cur[i] = (tmp + 1) % 10;
			if (pusher(cur.join(""))) return step + 1;
			cur[i] = !tmp ? 9 : tmp - 1;
			if (pusher(cur.join(""))) return step + 1;
			cur[i] = tmp;
		}
	}
	return -1;
};
console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0000"));
