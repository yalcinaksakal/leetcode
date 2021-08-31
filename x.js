// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// Example 1:

// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.
// Example 2:

// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].
// Example 3:

// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].
// Example 4:

// Input: fruits = [3,3,3,1,2,1,1,2,3,3,4]
// Output: 5
// Explanation: We can pick from trees [1,2,1,1,2].
// var totalFruit = function (fruits) {
//   trees = {};
//   for (const fruit of fruits)
//     trees[fruit] = trees[fruit] ? trees[fruit] + 1 : 1;

//   sortedTrees = Object.values(trees).sort((a, b) => b - a);
//   result = 0;
//   if (sortedTrees[0]) result += sortedTrees[0];
//   if (sortedTrees[1]) result += sortedTrees[1];
//   return result;
// };

//time limit exceeds, brute force
// var totalFruit = function (fruits) {
//   length = fruits.length;
//   result = 0;
//   for (i = 0; i < length; i++)
//     for (j = length; j > i; j--) {
//       basket = fruits.slice(i, j);
//       if (basket.length <= result) continue;
//       //   console.log(basket);
//       //   console.log(new Set(basket).size);
//       if (new Set(basket).size < 3 && basket.length > result)
//         result = basket.length;
//     }
//   return result;
// };

//not working
var totalFruit = function (fruits) {
  start = 0;
  result = 0;
  checkArr = [fruits[0]];
  returnPoint = null;
  for (i = 0; i < fruits.length; i++) {
    if (checkArr.includes(fruits[i])) continue;
    if (checkArr.length === 1) {
      //return point
      returnPoint = i;
      checkArr.push(fruits[i]);
      continue;
    }
    length = i - start;
    if (length > result) result = length;
    if (returnPoint !== null) {
      i = returnPoint - 1;
      start = returnPoint;
      checkArr = [fruits[start]];
    }
    return result;
  }
  //   result = 0;
  //   console.log(arr);
  //   for (i = 0; i < arr.length; i++) {
  //     sum = arr[i] + (arr[i + 1] ? arr[i + 1] : 0);
  //     if (sum > result) result = sum;
  //   }
  //   return result;
};

console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
