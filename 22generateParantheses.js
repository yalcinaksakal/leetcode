// 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

combinationsArr = [];
combination = "";

const validate = s => {
  i = 0;
  stack = [];
  while (s[i]) {
    if (s[i] === "(") stack.push("open");
    else {
      last = stack.pop();
      if (last !== "open") return false;
    }
    i++;
  }
  return stack.length ? false : true;
};

const generate = function (n) {
  if (!n) {
    // console.log(validate(combination));
    // console.log(combination);
    if (validate(combination)) combinationsArr.push(combination);
    return;
  }
  ["(", ")"].forEach(parenthesis => {
    combination += parenthesis;
    n--;
    generate(n);
    combination = combination.slice(0, -1);
    n++;
  });
};

const generateParenthesis = n => {
  combinationsArr = [];
  generate(2 * n);
  return combinationsArr;
};

generateParenthesis(9);
console.log(combinationsArr);
