function validParentheses(parens) {
  let check = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") check++;
    if (parens[i] === ")") check--;
    if (check < 0) return false;
  }
  return check === 0;
}

console.log(validParentheses("()"));
/*

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

*/
