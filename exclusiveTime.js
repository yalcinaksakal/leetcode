/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
	const time = Array(n).fill(0),
		que = [];
	let start = logs.shift().split(":");
	que.push(+start[0]);
	start = +start[2];
	for (const log of logs) {
		const [f, type, t] = log.split(":");
		time[que[que.length - 1]] += +t - start;
		if (type == "end") {
			time[que[que.length - 1]]++;
			que.pop();
			start = +t + 1;
		} else {
			que.push(+f);
			start = +t;
		}
	}
	return time;
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
