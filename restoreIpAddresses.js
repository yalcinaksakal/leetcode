/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s, d = 4) {
	if (s.length > 3 * d || !d || s.length < d) return [];

	if (d === 1) return (s[0] === "0" && s.length > 1) || +s > 255 ? [] : [s];

	const possibleIPs = [];

	let num = "";

	for (let i = 0; i < s.length; i++) {
		if (num === "0") break;
		num = num + s[i];
		if (+num > 255) break;

		const remaining = restoreIpAddresses(s.slice(i + 1), d - 1);

		for (const r of remaining) possibleIPs.push(num + "." + r);
	}

	return possibleIPs;
};

console.log(restoreIpAddresses("172162541"));
