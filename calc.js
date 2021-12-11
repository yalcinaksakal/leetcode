const calculator = function (s) {
  const stack = [];
  const chars = s.split("");
  let num = "",
    pop = "";

  const helper = (n1, n2, sign) => {
    switch (sign) {
      case "*":
        return n1 * n2;
      case "/":
        return n1 / n2;
      case "+":
        return n1 + n2;
      case "-":
        return n1 - n2;
      default:
        return 0;
    }
  };

  const operator = (s1, s2, inp) => {
    let num1, num2;
    const out = [];
    pop = inp.shift();
    while (pop != undefined) {
      if (pop === s1 || pop === s2) {
        num1 = out.pop();
        num2 = inp.shift();
        out.push(helper(num1, num2, pop));
      } else out.push(pop);
      pop = inp.shift();
    }

    return [...out];
  };

  const calculate = () => {
    const op = [];
    //reverse because op should start from left
    pop = stack.pop();
    while (pop !== "(" && pop != undefined) {
      op.unshift(pop);
      pop = stack.pop();
    }
    //remove first parnthesis
    if (op[0] === "(") op.shift();
    //multiply and divide first, then add and substract
    return operator("+", "-", [...operator("*", "/", [...op])])[0];
  };

  const handleParanthesis = () => {
    for (const char of chars) {
      if (char === " ") continue;
      if (+char < 10) {
        num += char;
        continue;
      }
      if (num !== "") {
        stack.push(+num);
        num = "";
      }

      if (char === "-" && typeof stack[stack.length - 1] !== "number") {
        num += char;
        continue;
      }

      if (char === ")") {
        stack.push(calculate());
        continue;
      }

      stack.push(char);
    }

    if (num !== "") stack.push(+num);
  };

  handleParanthesis();

  return calculate();
};

console.log(JSON.stringify(calculator + ""));
console.log(calculator("(5 + 8) * 3/8 +3+5-5+4"));
console.log(calculator("1+5*(4-3*(2-5)/7*14"));
