/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
var findLatestStep = function (arr, m) {
	const sortedArr = [...arr].sort((a, b) => a - b);
	let start = sortedArr[0],
		length = 0,
		maxLength = 0;
	const groups = [],
		bs = val => {
			if (!groups.length) return -1;
			let low = 0,
				mid,
				high = groups.length - 1;
			while (low < high) {
				mid = (low + high) >>> 1;
				if (groups[mid][0] > val) high = mid - 1;
				else if (groups[mid][0] + groups[mid][1] < val) low = mid + 1;
				else return mid;
			}
			return groups[low][0] > val || groups[low][0] + groups[low][1] < val
				? -1
				: low;
		},
		addNewGr = newStart => {
			if (length + 1 > m) {
				groups.push([start, length]);
				start = newStart;
				maxLength = Math.max(maxLength, length + 1);
				length = 0;
			}
		},
		divideGr = divideBy => {
			const grNo = bs(divideBy);
			if (grNo === -1) return false;
			const gr1Length = divideBy - groups[grNo][0],
				gr2Length = groups[grNo][0] + groups[grNo][1] - divideBy;
			if (gr1Length === m || gr2Length === m) return true;
			if (gr1Length < m && gr2Length < m) groups.splice(grNo, 1);
			else {
				if (gr1Length > m) groups[grNo][1] = gr1Length - 1;
				if (gr2Length > m)
					gr1Length < m
						? (groups[grNo] = [divideBy + 1, gr2Length - 1])
						: groups.splice(grNo + 1, 0, [divideBy + 1, gr2Length - 1]);
			}
			return false;
		};

	for (let i = 1; i < arr.length; i++)
		if (sortedArr[i] - sortedArr[i - 1] === 1) length++;
		else if (length + 1 === m) return arr.length;
		else addNewGr(arr[i]);
	if (length + 1 === m) return arr.length;
	addNewGr();
	if (maxLength < m) return -1;

	for (let i = arr.length - 1; i >= m; i--) if (divideGr(arr[i])) return i;
	return -1;
};
console.log(findLatestStep([10, 6, 9, 4, 7, 8, 5, 2, 1, 3], 1));
