function findLastLongestNAlphaSubString(str, numberOfDistincts) {
  let length = 0;
  let resultSubstr = "";
  for (let i = 0; i < str.length; i++)
    for (let j = str.length; j > i; j--)
      if (
        new Set(str.slice(i, j)).size <= numberOfDistincts &&
        str.slice(i, j).length >= length
      ) {
        resultSubstr = str.slice(i, j);
        length = str.slice(i, j).length;
      }
  return { resultSubstr, length };
}

console.log(findLastLongestNAlphaSubString("ABCBCCCCDDDDEEF", 3));
/*
# Problem: Implement a function that takes an input string 'str' and an integer 'n',
#          and returns the last longest substring with at most 'n'
#          distinct alphabets.
# Example 1
# *str = "ABCBCCCCDDDDEEF"
#      findLastLongestNAlphaSubString(str, 1) returns "DDDD"
#      findLastLongestNAlphaSubString(str, 2) returns "CCCCDDDD"
#      findLastLongestNAlphaSubString(str, 3) returns "BCBCCCCDDDD"
*/


