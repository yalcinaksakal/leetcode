/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const stack = [];
  let valids = {},
    pop,
    maxValid;

  s.split("").forEach((ch, i) => {
    if (ch === "(") stack.push(i);
    else {
      pop = stack.pop();
      if (pop !== undefined) {
        valids[i] = valids[pop - 1] !== undefined ? valids[pop - 1] : pop;
        maxValid = Math.max(maxValid, i - valids[i] + 1);
      }
    }
  });

  return maxValid;
};
console.log(longestValidParentheses("()((()))()()()))))"));
