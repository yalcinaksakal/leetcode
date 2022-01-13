/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = function (s) {
	const map = {},
		res = [];
	let begin = 0,
		end = 0;
	for (let i = 0; i < s.length; i++) map[s[i]] = i;
	for (let i = 0; i < s.length; i++) {
		end = Math.max(end, map[s[i]]);
		if (end == i) {
			res.push(end - begin + 1);
			begin = i + 1;
		}
	}
	return res;
};
console.log(partitionLabels("ababcbacadefegdehijhklij"));
const partitionLabels1 = function (s) {
	const result = [],
		chars = s.split("");
	let begin = s.length - 1,
		last = begin;

	for (let i = s.length - 1; i >= 0; i--) {
		index = chars.indexOf(s[i]);
		if (index >= begin && i <= begin) {
			result.unshift(last - begin + 1);
			last = i - 1;
			begin = last;
			continue;
		}
		if (index < begin) begin = index;
	}
	return result;
};

var minCostClimbingStairs = function (cost) {
	let i = cost.length,
		first = 0,
		sec = 0,
		cur;

	while (i > 0) {
		i--;
		cur = Math.min(first, sec);
		cur += cost[i];
		first = sec;
		sec = cur;
	}

	return Math.min(first, sec);
};

var minCostClimbingStairsRec = function (cost) {
	const minCostMap = {};
	const minCost = n => {
		if (n < 0) return 0;
		if (n < 2) return cost[n];
		if (minCostMap[n]) return minCostMap[n];
		minCostMap[n] = cost[n] + Math.min(minCost(n - 1), minCost(n - 2));
		return minCostMap[n];
	};
	n = cost.length;
	return Math.min(minCost(n - 1), minCost(n - 2));
};
