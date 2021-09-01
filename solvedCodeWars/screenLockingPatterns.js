/// a can visit c if b is visited earlier
const conditionalVisitMap = {
  a: { c: "b", g: "d", i: "e" },
  b: { h: "e" },
  c: { a: "b", g: "e", i: "f" },
  d: { f: "e" },
  e: {},
  f: { d: "e" },
  g: { a: "d", c: "e" },
  h: { b: "e" },
  i: { a: "e", c: "f", g: "h" },
};
//console.log(conditionalVisitMap.a["c"]);
let canVisit;

let visitLength;
let lengthOfPattern;
let numberOfPossibilities;
let dot;
let check;
function startRec(prevDot) {
  for (let i = 0; i < Object.keys(canVisit).length; i++) {
    dot = Object.keys(canVisit)[i];
    check = true;
    if (typeof conditionalVisitMap[prevDot][dot] === "undefined") check = false;
    if (check) check = !canVisit[conditionalVisitMap[prevDot][dot]];
    if (
      canVisit[dot] &&
      (typeof conditionalVisitMap[prevDot][dot] === "undefined" || check)
    ) {
      visitLength++;
      if (visitLength === lengthOfPattern) {
        numberOfPossibilities++;
        visitLength--;
        continue;
      } else {
        canVisit[dot] = 0;
        startRec(dot);
      }
      visitLength--;
      console.log(canVisit[dot]);
      canVisit[dot] = 1;
      console.log(canVisit[dot]);
    }

  }
}

function countPatternsFrom(firstPoint, length) {
  // Your code here
  if (!length) return 0;
  if (length === 1) return 1;
  canVisit = {
    a: 1,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    f: 1,
    g: 1,
    h: 1,
    i: 1,
  };
  numberOfPossibilities = 0;
  visitLength = 0;
  lengthOfPattern = length;
  firstPoint = firstPoint.toLowerCase();
  //visisted, u cant visit later
  canVisit[firstPoint] = 0;
  visitLength++;
  startRec(firstPoint);
  return numberOfPossibilities;
}

// console.log(countPatternsFrom("A", 0)); //, 0);
// console.log(countPatternsFrom("A", 10)); //, 0);
// console.log(countPatternsFrom("B", 1)); //, 1);
// console.log(countPatternsFrom("C", 2)); //, 5);
console.log('ok');
// console.log(countPatternsFrom("D", 3)); //, 37);
console.log(countPatternsFrom("E", 4)); //, 256);
console.log(countPatternsFrom("E", 8)); //, 23280);
// Screen Locking Patterns
// You might already be familiar with many smartphones that allow you to use a geometric pattern as a security measure. To unlock the device, you need to connect a sequence of dots/points in a grid by swiping your finger without lifting it as you trace the pattern through the screen.

//my SOLUTION
// ABC   A   B !BC D !DG E !EI F H    (A,C,G,I SAME)
// DEF   B   A  C  D E F G  !EH I
// GHI   C   !BA B D E F !EG H !FI
//       D   A B C E !EF G H I
//       E   A B C D F G H I
///      F   A B C !ED E G H I
//       G   !DA B !EC D E F H !HI
//       H   A !EB C D E F G I
//       I   !EA B !FC D E F !HG H
//a can go c if b is visited earlier=condition is =conditionalVisitMap.a.c

// A B C D E
// F G H I J
// K L M N O
// P R S T U
// X W V Y Z

// lock_example.png

// For this kata, your job is to implement a function that returns the number of possible patterns starting from a given first point, that have a given length.

// More specifically, for a function countPatternsFrom(firstPoint, length), the parameter firstPoint is a single-character string corresponding to the point in the grid (i.e.: 'A') where your patterns start, and the parameter length is an integer indicating the number of points (length) every pattern must have.

// For example, countPatternsFrom("C", 2), should return the number of patterns starting from 'C' that have 2 two points. The return value in this case would be 5, because there are 5 possible patterns:

// (C -> B), (C -> D), (C -> E), (C -> F) and (C -> H).

// Bear in mind that this kata requires returning the number of patterns, not the patterns themselves, so you only need to count them. Also, the name of the function might be different depending on the programming language used, but the idea remains the same.

// Rules
// In a pattern, the dots/points cannot be repeated: they can only be used once, at most.
// In a pattern, any two subsequent dots/points can only be connected with direct straight lines in either of these ways:
// Horizontally: like (A -> B) in the example pattern image.
// Vertically: like (D -> G) in the example pattern image.
// Diagonally: like (I -> E), as well as (B -> I), in the example pattern image.
// Passing over a point between them that has already been 'used': like (G -> C) passing over E, in the example pattern image. This is the trickiest rule. Normally, you wouldn't be able to connect G to C, because E is between them, however when E has already been used as part the pattern you are tracing, you can connect G to C passing over E, because E is ignored, as it was already used once.

// The sample tests have some examples of the number of combinations for some cases to help you check your code.

// Haskell Note: A data type Vertex is provided in place of the single-character strings. See the solution setup code for more details.

// Fun fact:

// In case you're wondering out of curiosity, for the Android lock screen, the valid patterns must have between 4 and 9 dots/points. There are 389112 possible valid patterns in total; that is, patterns with a length between 4 and 9 dots/points.
