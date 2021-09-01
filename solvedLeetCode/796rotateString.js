// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false
var rotateString = function (s, goal) {
  length = s.length;
  if (length !== goal.length) return false;
  startIndexArr = [];
  s.split("").forEach((el, i) => {
    if (el === goal[0]) startIndexArr.push(i);
  });
  if (!startIndexArr.length) return false;
  check = true;
  j = 0;
  while (check && j < startIndexArr.length) {
    startIndex = startIndexArr[j];
    for (i = startIndex; i < startIndex + length; i++) {
      if (s[i % length] !== goal[i - startIndex]) {
        check = false;
        break;
      }
    }
    if (check) return true;
    else check = true;
    j++;
  }
  return false;
};
console.log(rotateString("bbbacddceeb", "ceebbbbacdd"));
