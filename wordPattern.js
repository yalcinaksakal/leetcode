// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", s = "dog dog dog dog"
// Output: false

const wordPattern = function (pattern, s) {
  patternMap = {};
  wordMap = {};
  words = s.split(" ");
  if (words.length !== pattern.length) return false;
  for (i = 0; i < pattern.length; i++) {
    if (!patternMap[pattern[i]]) {
      if (wordMap[words[i]]) return false;
      patternMap[pattern[i]] = words[i];
      wordMap[words[i]] = pattern[i];
      continue;
    }
    if (patternMap[pattern[i]] !== words[i]) return false;
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat do"));
