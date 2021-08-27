answer = "";

function getAllCombinations(numbers) {
  // Handles edge cases.
  if (numbers.length <= 1) {
    return [
      {
        value: numbers[0],
        op: numbers[0],
        digits: 1,
      },
    ];
  }
  const results = [];
  if (answer) return;


  for (let i = 0; i < numbers.length - 1 && !answer; i++) {
    const leftCombinations = getAllCombinations(numbers.slice(0, i + 1));
    const rightCombinations = getAllCombinations(numbers.slice(i + 1));

    for (left = 0; left < leftCombinations?.length && !answer; left++) {
      for (right = 0; right < rightCombinations?.length && !answer; right++) {
        leftOp = leftCombinations[left].op;
        rightOp = rightCombinations[right].op;
        nOfDigits =
          leftCombinations[left].digits + rightCombinations[right].digits;
        ["+", "-", "*", "/"].forEach(operator => {
          if (
            operator !== "/" ||
            (operator === "/" && rightCombinations[right].value)
          ) {
            op = `(${leftOp}${operator}${rightOp})`;
            op =
              op[0] === "(" &&
              op[op.length - 1] === ")" &&
              (operator === "*" || operator === "/")
                ? op.slice(1, -1)
                : op;
            value = eval(op);

            if (value === 24 && nOfDigits === 4) {
              answer = op;
              return;
            }
            results.push({
              value,
              op,
              digits: nOfDigits,
            });
          }
        });
      }
    }
  }

  return answer ? answer : results;
}
function permute(permutation) {
  var length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

function equalTo24(a, b, c, d) {
  answer = "";
  permutationArray = permute([a, b, c, d]);
  for (i = 0; i < permutationArray.length; i++)
    if (!answer) getAllCombinations(permutationArray[i]);
  return answer ? answer : "It's not possible!";
}
console.log(equalTo24(7, 5, 3, 11));
// result = getAllCombinations([1, 2, 3, 6]);
// filteredResult = result.filter(r => r.value === 24);
// console.log(result);
// console.log(filteredResult);
