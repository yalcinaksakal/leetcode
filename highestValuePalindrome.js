function highestValuePalindrome(s, n, k) {
	// Write your code here
	let low = -1,
		high = n,
		count = 0;
	s = s.split("");
	while (++low < --high) if (s[low] !== s[high]) count++;
	if (count > k) return -1;
	low = -1;
	high = n;
	while (++low < --high && k) {
		if (s[low] === s[high] && s[low] === "9") continue;
		if (s[low] !== s[high]) {
			if (s[low] === "9") s[high] = 9;
			else if (s[high] === "9") s[low] = 9;
			else if (k - 1 >= count) {
				s[high] = 9;
				s[low] = 9;
				k--;
			} else {
				s[low] = Math.max(s[low], s[high]);
				s[high] = s[low];
			}
			k--;
			count--;
			continue;
		}
		if (k - 2 >= count) {
			k -= 2;
			s[high] = 9;
			s[low] = 9;
		}
	}
	if (k && n % 2) s[n >>> 1] = 9;
	return s.join("");
}
highestValuePalindrome("092282", 6, 3);
