// 30. Substring with Concatenation of All Words
// Hard

// Share
// You are given a string s and an array of strings words of the same length. Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.

// You can return the answer in any order.

// Example 1:

// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
// The output order does not matter, returning [9,0] is fine too.
// Example 2:

// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// Output: []
// Example 3:

// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// Output: [6,9,12]
const findSubstring = function (s, words) {
  wordMap = {};
  wordMapSize = 1;
  patern = [];
  wordLength = words[0].length;
  subStrLength = wordLength * words.length;
  numberOfWords = words.length;

  result = [];
  const coder = word => {
    if (wordMap[word]) return wordMap[word];
    wordMap[word] = wordMapSize;
    wordMapSize++;
    return wordMap[word];
  };
  const createPatern = w => {
    for (const word of w) {
      patern.push(coder(word));
    }
    patern.sort((a, b) => a - b);
  };
  const checkSubstr = subStr => {
    paternToCompare = [];
    for (j = 0; j < numberOfWords; j++) {
      index = j * wordLength;
      wordInString = subStr.slice(index, index + wordLength);
      if (!wordMap[wordInString]) return false;
      paternToCompare.push(wordMap[wordInString]);
    }
    paternToCompare.sort((a, b) => a - b);
    for (j = 0; j < numberOfWords; j++)
      if (patern[j] !== paternToCompare[j]) return false;
    return true;
  };

  createPatern(words);
  //   console.log(patern);
  lastIndex = s.length - subStrLength + 1;
  for (i = 0; i < lastIndex; i++) {
    if (checkSubstr(s.slice(i, i + subStrLength))) result.push(i);
  }
  return result;
};
// console.log(
//   findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
// );
console.log(
  findSubstring("bcabbcaabbccacacbabccacaababcbb", [
    "c",
    "b",
    "a",
    "c",
    "a",
    "a",
    "a",
    "b",
    "c",
  ])
);
