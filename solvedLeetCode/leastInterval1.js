/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
	const freq = {};
	for (const t of tasks) freq[t] ? freq[t]++ : (freq[t] = 1);
	const que = Object.values(freq).sort((a, b) => a - b);
	const waitingQ = [];

	const add = val => {
		let i = 0;
		while (que[i] < val) i++;
		que.splice(i, 0, val);
	};
	let time = 0,
		cur;
	while (que.length || waitingQ.length) {
		time++;
		cur = que.pop() - 1;
		if (cur) waitingQ.push([cur, time + n]);
		if (waitingQ[0] && waitingQ[0][1] == time) add(waitingQ.shift()[0]);
	}

	return time;
};

leastInterval(["A", "A", "A", "B", "B", "B", "C"], 2);
