// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

const map = [
  "",
  "",
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
  ["m", "n", "o"],
  ["p", "q", "r", "s"],
  ["t", "u", "v"],
  ["w", "x", "y", "z"],
];

let combination = "";
let allComb = [];
const allCombinations = digits => {
  digits.split("").forEach((digit, i) => {
    map[digit].forEach(ch => {
      combination += ch;
      allCombinations(digits.slice(i + 1));
      allComb.push(combination);
      combination = combination.slice(0, -1);
    });
  });
};

var letterCombinations = function (digits) {
  allComb = [];
  combination = "";
  allCombinations(digits);
  return allComb.filter(c => c.length === digits.length);
};

result = letterCombinations("234");
console.log(result);
