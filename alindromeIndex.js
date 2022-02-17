function palindromeIndex(s, nEq = null, i = 0, j = s.length - 1) {
	// Write your code here
	while (j > i) {
		if (s[i] !== s[j]) {
			if (nEq !== null) return -1;
			let next = palindromeIndex(s, j, i, j - 1);
			if (next !== -1) return next;
			return palindromeIndex(s, i, i + 1, j);
		}
		i++;
		j--;
	}
	return nEq === null ? -1 : nEq;
}
console.log(palindromeIndex("aaab"));
