function sumOfDivided(lst) {
  const factors = {};
  //to find all possible factors, find max el
  const max = Math.max(...lst.map(el => (el = Math.abs(el))));
  //prime checker
  const isPrime = number => {
    for (let j = 2; j < number; j++) if (number % j === 0) return false;
    return true;
  };
  //find all possible prime factors
  for (let i = 2; i <= max / 2; i++) {
    if (isPrime(i)) factors[i] = { sum: "" };
  }
  //elements itself may be prime, so check
  let absValueOfListItem;
  for (let i = 0; i < lst.length; i++) {
    absValueOfListItem = Math.abs(lst[i]);
    if (absValueOfListItem > max / 2 && isPrime(absValueOfListItem))
      factors[absValueOfListItem] = { sum: "" };
  }
  //If an element has factor add it to factor's sum
  for (let i = 0; i < lst.length; i++) {
    for (const el of Object.keys(factors))
      if (lst[i] % el === 0) factors[el].sum = Number(factors[el].sum) + lst[i];
  }
  //objct to array
  let resultsToReturn = [];
  for (const el of Object.keys(factors))
    if (factors[el].sum !== "")
      resultsToReturn.push([Number(el), factors[el].sum]);

  return resultsToReturn;
}
console.log(sumOfDivided([15, 21, 24, 30, 45]));
/*
Given an array of positive or negative integers

I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

Example:

I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

Notes:

It can happen that a sum is 0 if some numbers are negative!
Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.
*/
