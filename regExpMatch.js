// 10. Regular Expression Matching

// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
// Example 4:

// Input: s = "aab", p = "c*a*b"
// Output: true
// Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
// Example 5:

// Input: s = "mississippi", p = "mis*is*p*."
// Output: false

const isMatch = function (s, p) {
  // if (!p) return true;

  x = p.split("*").length - 1;
  if (s.length < p.length - 2 * x) return false;

  indexS = 0;
  for (i = 0; i < p.length; i++) {
    if (p[i] === "*") continue;
    if (p[i + 1] === "*") {
      k = indexS;
      check = false;
      pattern = p.slice(i + 2);
      repeatingChar = p[i];
      while (
        s[k] &&
        !check &&
        (s[k] === repeatingChar || repeatingChar === "." || !(k - indexS))
      ) {
        j = 0;
        while (j <= s.length && !check) {
          // console.log(s.slice(k));
          // console.log(repeatingChar.repeat(j) + pattern);
          console.log(j);
          check = isMatch(s.slice(k), repeatingChar.repeat(j) + pattern);
          j++;
        }
        k++;
      }
      return check;
    }

    if (p[i] === s[indexS] || (p[i] === "." && s[indexS])) {
      indexS++;
      continue;
    }
    return false;
  }
  return indexS >= s.length;
};

// console.log(isMatch("bbbba", ".*a*a"));
// console.log(isMatch("ab", ".*c"));
// console.log(isMatch("ab", ".*.."));
// console.log(isMatch("mississippi", "mis*is*ip*."));
//  console.log(isMatch("abcdedededecccc", "ab.*dec*"));
// console.log(isMatch("ip", "s*p"));
// console.log(isMatch("aa", "."));
// console.log(isMatch("aa", "b*a"));
// console.log(isMatch("ab", ".*"));
// console.log(isMatch("aa", "b*ac*a"));
console.log(isMatch("a", "a*c*"));
//error repeating *
