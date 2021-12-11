/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const map = {},
    words = s.split(" ");
  let word;
  for (let i = 0; i < words.length; i++) {
    word = words[i];
    if (i > pattern.length - 1) return false;
    if (!map[pattern[i]]) map[pattern[i]] = word;
    else if (map[pattern[i]] !== word) return false;
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat fish"));
