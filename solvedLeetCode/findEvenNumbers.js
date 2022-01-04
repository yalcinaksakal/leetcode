/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
	let cur = [],
		res = new Set();

	digits.sort((a, b) => a - b);

	const permute = () => {
		if (cur.length === 3) {
			res.add(cur.join(""));
			return;
		}

		for (let i = 0; i < digits.length; i++) {
			if (digits[i] === null) continue;
			if (!digits[i] && !cur.length) continue;
			if (cur.length == 2 && digits[i] % 2) continue;
			cur.push(digits[i]);
			digits[i] = null;
			permute();
			digits[i] = cur.pop();
		}
	};

	permute();

	return Array.from(res);
};

const set = new Set([1, 2, 3, 4, 4, 4, 4]);
console.log(set, Array.from(set));
