/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function (n, m, group, beforeItems) {
	let i = m;
	const groups = {},
		inGrDep = {},
		gDep = [];
	//group all nums
	for (let j = 0; j < n; j++) {
		if (group[j] === -1) {
			groups[i] = [j];
			group[j] = i;
			i++;
			continue;
		}
		groups[group[j]] ? groups[group[j]].push(j) : (groups[group[j]] = [j]);
	}
	//seperate dependencies to groups
	for (let j = 0; j < n; j++) {
		beforeItems[j].forEach(d => {
			group[j] === group[d]
				? inGrDep[group[j]]
					? inGrDep[group[j]].push([j, d])
					: (inGrDep[group[j]] = [[j, d]])
				: gDep.push([group[j], group[d]]);
		});
	}

	var findOrder = function (nums, preqs) {
		const mapNum = {}, //number of preqs of num
			mapPreq = {}; //num is the preq of this listed nums
		for (const [num, preq] of preqs) {
			mapNum[num] ? mapNum[num]++ : (mapNum[num] = 1);
			mapPreq[preq] ? mapPreq[preq].push(num) : (mapPreq[preq] = [num]);
		}
		const res = [];
		const order = numsToOrder => {
			const next = [];
			for (const n of numsToOrder) {
				if (!mapNum[n]) {
					res.push(n);
					if (mapPreq[n])
						mapPreq[n].forEach(e => {
							if (mapNum[e]) mapNum[e]--;
						});
					continue;
				}
				next.push(n);
			}
			if (next.length !== numsToOrder.length) order(next);
		};
		order(nums);
		return res.length === nums.length ? res : false;
	};
	let sorted;
	for (const [gr, nums] of Object.entries(groups))
		if (inGrDep[gr]) {
			sorted = findOrder(nums, inGrDep[gr]);
			if (!sorted) return [];
			groups[gr] = sorted;
		}
	sorted = findOrder(Object.keys(groups), gDep);
	if (!sorted) return [];
	const res = [];
	for (const g of sorted) res.push(...groups[g]);
	console.log(res);
	return res;
};

sortItems(5, 5, [2, 0, -1, 3, 0], [[2, 1, 3], [2, 4], [], [], []]);
