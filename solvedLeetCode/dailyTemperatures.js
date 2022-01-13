/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
	const res = Array(temperatures.length).fill(0),
		temp = [{ t: temperatures[0], i: 0 }];
	let l, found;

	for (let i = 1; i < temperatures.length; i++) {
		l = temp.length - 1;
		while (l > -1 && temp[l].t < temperatures[i]) {
			found = temp.pop();
			res[found.i] = i - found.i;
			l--;
		}
		temp.push({ t: temperatures[i], i });
	}
	return res;
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
