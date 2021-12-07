const calculator = function (operation) {
  const operators = ["(", ")", "*", "/", "+", "-"];
  const nums = Array.from(Array(10).keys());

  const chekValidity = op => {
    if (op.filter(ch => !operators.includes(ch) && !nums.includes(+ch)).length)
      return false;

    const stack = [],
      map = { "(": ")" },
      prntArr = op.filter(ch => ch === "(" || ch === ")");

    for (let i = 0; i < prntArr.length; i++) {
      if (!stack.length && !map[prntArr[i]]) return false;
      if (map[prntArr[i]]) {
        stack.push(prntArr[i]);
        continue;
      }
      if (map[stack[stack.length - 1]] === prntArr[i]) {
        stack.pop();
        continue;
      }
      return false;
    }
    return !stack.length;
  };

  const opArr = operation
    .split("")
    .map(ch => ch.trim())
    .filter(ch => ch !== "");

  if (!chekValidity(opArr)) return "Oparation is not valid";

  let num = [],
    char,
    temp,
    i = 0;

  const addNum = (start, end, val = +num.join("")) => {
    opArr.splice(start, end);
    opArr.splice(start, 0, val);
    num = [];
  };

  while (i < opArr.length) {
    char = opArr[i];
    if (nums.includes(+char)) num.push(char);
    else if (num.length) {
      temp = num.length;
      addNum(i - temp, temp);
      i = i - temp;
    }
    i++;
  }
  if (num.length) addNum(opArr.length - num.length, num.length);

  let firstPrnths = [];

  opArr.forEach((ch, i) => {
    if (ch === "(") firstPrnths.push(i);
  });

  const operate = (f, l, pop = true) => {
    const range = opArr.splice(f, l - f + 1);
    if (pop) {
      range.pop();
      range.shift();
    }

    const reduceRange = (start, end, val) => {
      range.splice(start, end);
      range.splice(start, 0, val);
      num = [];
    };
    i = 1;
    while (i < range.length - 1) {
      char = range[i];
      if (char === "*" || char === "/") {
        num = range[i - 1];
        num = char === "*" ? num * range[i + 1] : num / range[i + 1];
        reduceRange(i - 1, 3, num);
        i = i - 2;
      }
      i++;
    }
    if (range[0] === "-" || range[0] === "+") {
      range[1] *= range[0] === "-" ? -1 : 1;
      range.shift();
    }

    i = 1;
    while (i < range.length - 1) {
      char = range[i];
      if (char === "+" || char === "-") {
        num = range[i - 1];
        num = char === "+" ? num + range[i + 1] : num - range[i + 1];
        reduceRange(i - 1, 3, num);
        i = i - 2;
      }
      i++;
    }
    addNum(f, 0, range[0]);
  };

  // //operate until single number remains in the list, in a loop
  // now on easy, repeat the process below...
  while (firstPrnths.length) {
    num = firstPrnths.pop();
    operate(
      num,
      opArr.findIndex((el, i) => el === ")" && i > num)
    );
  }
  operate(0, opArr.length - 1, false);
  return opArr[0].toFixed(2);
};

console.log(JSON.stringify(calculator + ""));
console.log(
  calculator("(-534+(423423*2324+5-3)) * 3/(-8 +21*3-21/7+5-5*2/9+2*3)")
);
