/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures1 = function (temperatures) {
	const res = [],
		temp = {};
	let found;

	for (let i = temperatures.length - 1; i > -1; i--) {
		found = Object.entries(temp).filter(t => +t[0] > temperatures[i]);
		res.push(found.length ? Math.min(...found.map(t => t[1])) - i : 0);
		temp[temperatures[i]] = i;
	}
	return res.reverse();
};

var dailyTemperatures = function (temperatures) {
	const res = Array(temperatures.length).fill(0),
		temp = [];
	let k = 0;

	for (let i = 0; i < temperatures.length; i++) {
		while (k && temp[k - 1].t < temperatures[i]) {
			k--;
			res[temp[k].i] = i - temp[k].i;
		}
		temp[k] = { t: temperatures[i], i };
		k++;
	}
	return res;
};
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
