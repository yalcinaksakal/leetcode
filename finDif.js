var findTheDifference = function (s, t) {
	s = s.split("").sort((a, b) => {
		if (a < b) return -1;
		return 0;
	});
	t = t.split("").sort((a, b) => {
		if (a < b) return -1;
		return 0;
	});
	for (let i = 0; i < t.length; i++) if (t[i] !== s[i]) return t[i];
};
