// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
var countCharacters = function (words, chars) {
  charsMap = {};
  for (const ch of chars) charsMap[ch] = charsMap[ch] ? charsMap[ch] + 1 : 1;
  result = 0;
  for (const word of words) {
    tempMap = { ...charsMap };
    check = true;
    i = 0;
    while (check && i < word.length) {
      if (tempMap[word[i]]) {
        tempMap[word[i]]--;
        i++;
      } else check = false;
    }
    if (check) result += word.length;
  }
  return result;
};

console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));
