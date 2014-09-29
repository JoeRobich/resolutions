#! node

// http://repl.it/0Ev

// PROBLEM //

/*
If p is the perimeter of a right angle triangle with integral length sides,
{a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised?
*/

// ANSWER //

function findSolutionCount(number) {
  var solutions = 0;

  for (var a = 1; a < number - 1; a++)
  for (var b = 1; b < number - b - 1; b++) {
    var c = number - a - b;
    if (Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2)) {
      solutions++;
    }
  }

  return solutions;
}

function findMaxSolutionNumber(high) {
  var largestSolution = 0;
  var largestNumber = 0;

  for (var number = 0; number <= high; number++) {
    var solutions = findSolutionCount(number);
    if (solutions > largestSolution) {
      largestSolution = solutions;
      largestNumber = number;
    }
  }

  return largestNumber;
}

var result = findMaxSolutionNumber(1000);

console.log(result);

// 840
