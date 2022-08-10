/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
var findLatestStep = function (arr, m) {
	const groups = {},
		belongsTo = {},
		sortedArr = [...arr].sort((a, b) => a - b);
	let grNo = 0,
		newGr = [sortedArr[0]];
	const constructGroup = group => {
			if (group.length < m) return;
			groups[++grNo] = group;
			group.forEach(el => (belongsTo[el] = grNo));
		},
		divideGr = divideBy => {
			if (!belongsTo[divideBy] || !groups[belongsTo[divideBy]]) return false;
			const gr1 = [],
				gr2 = [];
			for (const el of groups[belongsTo[divideBy]])
				el > divideBy ? gr2.push(el) : el < divideBy && gr1.push(el);
			if (gr1.length === m || gr2.length === m) return true;
			delete groups[belongsTo[divideBy]];
			constructGroup(gr1);
			constructGroup(gr2);
			return false;
		};
	for (let i = 1; i < arr.length; i++)
		if (sortedArr[i] - sortedArr[i - 1] === 1) newGr.push(sortedArr[i]);
		else if (newGr.length === m) return arr.length;
		else {
			constructGroup([...newGr]);
			newGr = [arr[i]];
		}
	if (newGr.length === m) return arr.length;
	constructGroup(newGr);

	for (let i = arr.length - 1; i >= m; i--) if (divideGr(arr[i])) return i;
	return -1;
};
console.log(findLatestStep([3, 5, 1, 2, 4], 1));
