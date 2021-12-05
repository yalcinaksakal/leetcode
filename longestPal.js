var longestPalindrome = function (s) {
  let res = "";
  const check = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > res.length) {
        res = s.slice(l, r + 1);
      }
      l--;
      r++;
    }
  };
  for (let i = 0; i < s.length; i++) {
    check(i, i);
    check(i, i + 1);
  }
  return res;
};

console.log(longestPalindrome("babad"));
