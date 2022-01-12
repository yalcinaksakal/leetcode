/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
	let res = 0;
	let l, r;
	const count = () => {
		for (let i = 0; i < rating.length; i++) {
			l = 0;
			r = 0;
			for (let j = 0; j < i; j++) if (rating[i] > rating[j]) l++;
			for (let j = i + 1; j < rating.length; j++)
				if (rating[i] < rating[j]) r++;
			res += r * l + (i - l) * (rating.length - i - 1 - r);
		}
	};

	count();

	return res;
};
console.log(numTeams([1, 2, 3, 4]));
