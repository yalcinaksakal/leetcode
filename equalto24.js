function getAllCombinations(numbers) {
  // Handles edge cases.
  if (numbers.length <= 1) {
    return new Set(numbers);
  }

  const results = [];

  // Iterates to find a splitting position.
  // E.g.: For [2 3 5 6], we can split them in 3 ways:
  // - [2] [3 5 6],
  // - [2 3] [5 6],
  // - [2 3 5] [6].
  // Then, we recursively generates all the numbers you can
  // produce from left and right side.  Then, apply
  // +, -, * and / to all of their combinations.
  for (let i = 0; i < numbers.length - 1; i++) {
    const leftCombinations = getAllCombinations(numbers.slice(0, i + 1));
    const rightCombinations = getAllCombinations(numbers.slice(i + 1));
    console.log(leftCombinations, rightCombinations);
    for (const leftValue of leftCombinations.values()) {
      for (const rightValue of rightCombinations.values()) {
        results.push(leftValue + rightValue);
        results.push(leftValue - rightValue);
        results.push(leftValue * rightValue);
        if (rightValue != 0 && leftValue % rightValue == 0) {
          results.push(Math.floor(leftValue / rightValue));
        }
      }
    }
  }

  return results;
}

result = getAllCombinations([1, 2, 3, 4]).filter(r => r === 24);
// console.log(result);
