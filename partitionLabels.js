// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Return a list of integers representing the size of these parts.

// Example 1:

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
// Example 2:

// Input: s = "eccbbbbdec"
// Output: [10]

const partitionLabels = function (s) {
  const result = [];
  begin = s.length - 1;
  last = begin;
  chars = s.split("");
  for (i = s.length - 1; i >= 0; i--) {
    index = chars.indexOf(s[i]);
    if (index >= begin && i <= begin) {
      result.unshift(last - begin + 1);
      last = i - 1;
      begin = last;
      continue;
    }
    if (index < begin) begin = index;
  }
  return result;
};
console.log(partitionLabels("ababcbacadefegdehijhklij"));
console.log(partitionLabels("abbacdcadcde"));
