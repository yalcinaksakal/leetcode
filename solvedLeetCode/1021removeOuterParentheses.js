// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

// Example 1:

// Input: s = "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:

// Input: s = "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation:
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
// Example 3:

// Input: s = "()()"
// Output: ""
// Explanation:
// The input string is "()()", with primitive decomposition "()" + "()".

var removeOuterParentheses = function (parens) {
  const primitives = [];
  let primitiveStart = 0;
  let check = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") check++;
    if (parens[i] === ")") check--;
    if (!check) {
      primitives.push(parens.slice(primitiveStart + 1, i));
      primitiveStart = i + 1;
    }
    //s is valid, guaranteed
    // if (check < 0) return false;
  }
  return primitives.join("");
};
console.log(removeOuterParentheses("(()())(())(()(()))"));
