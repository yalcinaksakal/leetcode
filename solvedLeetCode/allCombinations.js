function getCombinations(nums) {
    var result = [];
    var f = function (combination, remainingArray) {
      for (var i = 0; i < remainingArray.length; i++) {
        newCombination = [...combination, remainingArray[i]];
        result.push(newCombination);
        f(newCombination, remainingArray.slice(i + 1));
      }
    };
    f([], nums);
    return result;
  }
  
  result = getCombinations([1, 2, 3, 4, 6, 7]);
  console.log(result);