/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function (a, b) {
	let a1, a2, b1, b2;
	const l = Math.min(a.length, b.length);

	const isPal = s => {
		let i = 0,
			j = s.length - 1;

		while (j > i) {
			if (s[i] !== s[j]) return false;
			i++;
			j--;
		}

		return true;
	};

	for (let i = 0; i < a.length; i++) {
		a1 = a.slice(0, i);
		a2 = a.slice(i);
		b1 = b.slice(0, i);
		b2 = b.slice(i);

		if (isPal(a1 + b2) || isPal(a2 + b1) || isPal(b2 + a1) || isPal(b1 + a2))
			return true;
	}

	return false;
};
