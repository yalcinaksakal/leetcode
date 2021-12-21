const isMatch = function (s, p) {
	const mat = Array(s.length + 1)
		.fill()
		.map(() => Array(p.length + 1).fill(0));

	mat[0][0] = 1;

	for (let i = 1; i < mat[0].length; i++) {
		if (p[i - 1] === "*") {
			mat[0][i] = mat[0][i - 2];
		}
	}

	for (let i = 1; i < mat.length; i++) {
		for (let j = 1; j < mat[0].length; j++) {
			if (p[j - 1] == "." || p[j - 1] == s[i - 1]) {
				mat[i][j] = mat[i - 1][j - 1];
			} else if (p[j - 1] == "*") {
				mat[i][j] = mat[i][j - 2];
				if (p[j - 2] == "." || p[j - 2] == s[i - 1]) {
					mat[i][j] = mat[i][j] | mat[i - 1][j];
				}
			}
		}
	}
	return !!mat[s.length][p.length];
};

console.log(isMatch("aaa", "ab*a*c*a"));
