/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
	const andy = {};
	let ans = list1.length + list2.length,
		res,
		cI;

	for (let i = 0; i < list1.length; i++) andy[list1[i]] = i;

	for (let i = 0; i < list2.length; i++)
		if (andy[list2[i]] != undefined) {
			cI = i + andy[list2[i]];
			if (ans > cI) {
				res = [list2[i]];
				ans = cI;
			} else if (ans == cI) res.push(list2[i]);
		}

	return res;
};
