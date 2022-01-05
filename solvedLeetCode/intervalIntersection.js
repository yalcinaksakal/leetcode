/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
	const res = [];
	let i = 0,
		j = 0;

	const getIntersect = (s1, e1, s2, e2) => {
		let is = Math.max(s1, s2),
			ie = Math.min(e1, e2);
		if (is <= ie) res.push([is, ie]);
		e1 < e2 ? i++ : j++;
	};

	while (i < firstList.length && j < secondList.length)
		getIntersect(...firstList[i], ...secondList[j]);

	return res;
};

intervalIntersection(
	[
		[0, 2],
		[5, 10],
		[13, 23],
		[24, 25],
	],
	[
		[1, 5],
		[8, 12],
		[15, 24],
		[25, 26],
	]
);
