// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.
const repeatedSubstringPattern = function (s) {
  const check = subString =>
    s.split(subString).filter(part => part).length === 0;

  const length = s.length;
  maxLengthOfSubString = Math.trunc(length / 2);

  for (j = maxLengthOfSubString; j > 0; j--) {
    if (length % j) continue;
    sub = s.slice(0, j);
    if (check(sub)) return true;
  }
  return false;
};

console.log(repeatedSubstringPattern("abaabaaba"));
