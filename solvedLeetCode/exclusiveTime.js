/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
	const time = {},
		que = [];
	let start = logs.shift().split(":"),
		f,
		type,
		t;
	time[start[0]] = 0;
	que.push(start[0]);
	start = +start[2];

	for (const log of logs) {
		f = log.split(":");
		type = f[1];
		t = +f[2];
		f = f[0];
		time[que[que.length - 1]] += t - start;
		if (time[f] == undefined) time[f] = 0;
		start = t;
		if (type == "end") {
			time[que[que.length - 1]]++;
			que.pop();
			start++;
		} else que.push(f);
	}

	const res = Array(n).fill();
	for (const e of Object.entries(time)) res[+e[0]] = e[1];

	return res;
};
console.log(
	exclusiveTime(2, [
		"0:start:0",
		"0:start:2",
		"0:end:5",
		"1:start:6",
		"1:end:6",
		"0:end:7",
	])
);

// 0s0 2
// 0s2
// 0e5 4
// 1s6
// 1e6 1
// 0e7 1
