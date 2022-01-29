/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
	const owners = {};
	let owner;

	const joinOwners = o => {
		let mainOwner = o.pop();
		for (const k of Object.keys(owners))
			if (o.includes(owners[k])) owners[k] = mainOwner;
		return mainOwner;
	};

	for (let i = 0; i < accounts.length; i++) {
		owner = [];
		for (let j = 1; j < accounts[i].length; j++)
			if (owners[accounts[i][j]] != undefined)
				owner.push(owners[accounts[i][j]]);
		owner = owner.length ? (owner = joinOwners(owner)) : i;

		for (let j = 1; j < accounts[i].length; j++) owners[accounts[i][j]] = owner;
	}
	const merged = {};
	for (const [k, v] of Object.entries(owners))
		merged[v] ? merged[v].push(k) : (merged[v] = [k]);
	const res = [];
	for (const [k, v] of Object.entries(merged))
		res.push([
			accounts[k][0],
			...v.sort((a, b) => {
				if (a < b) return -1;
			}),
		]);
	return res;
};
accountsMerge([
	["David", "David0@m.co", "David1@m.co"],
	["David", "David3@m.co", "David4@m.co"],
	["David", "David4@m.co", "David5@m.co"],
	["David", "David2@m.co", "David3@m.co"],
	["David", "David1@m.co", "David2@m.co"],
]);
