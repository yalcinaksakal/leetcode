/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
	const res = Array(temperatures.length).fill(0),
		temp = [];
	let l, found;

	for (let i = 0; i < temperatures.length; i++) {
		l = temp.length - 1;
		while (l > -1 && temp[l--].t < temperatures[i]) {
			found = temp.pop();
			res[found.i] = i - found.i;
		}
		temp.push({ t: temperatures[i], i });
	}
	return res;
};
