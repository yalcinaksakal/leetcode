var generateParenthesis = function (n) {
  const comb = [];
  const result = [];
  let sum = 0;

  const permute = () => {
    comb.push("(");
    sum++;
    if (comb.length < 2 * n + 1) permute();
    comb.pop();
    sum--;

    comb.push(")");
    sum--;
    if (comb.length === 2 * n && sum === 0) result.push(comb.join(""));
    if (comb.length < 2 * n + 1 && sum >= 0) permute();
    comb.pop();
    sum++;
  };

  permute();
  return result;
};

generateParenthesis(3);
