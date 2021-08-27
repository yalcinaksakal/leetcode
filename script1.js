// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
const longestCommonPrefix = function (strs) {
  result = "";
  strs.sort
  isCommon = true;
  word = strs[0];
  i = 0;
  while (isCommon && i < word.length) {
    for (j = 1; j < strs.length; j++)
      if (strs[j][i] !== word[i]) {
        isCommon = false;
        break;
      }
    if (isCommon) result += word[i];
    i++;
  }
  return result;
};
