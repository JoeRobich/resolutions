#! node

// http://repl.it/0dE/1

// PROBLEM //

/*
There are exactly ten ways of selecting three from five, 12345:

123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

In combinatorics, we use the notation, 5C3 = 10.

In general,

nCr =	n! / ( r!(n−r)! ) ,where r ≤ n, n! = n×(n−1)×...×3×2×1, and 0! = 1.
It is not until n = 23, that a value exceeds one-million: 23 C 10 = 1144066.

How many, not necessarily distinct, values of  nCr, for 1 ≤ n ≤ 100, are greater
than one-million?
*/

// HELPERS //

Function.memoize=function(f){var m={};return function(){var a=arguments;p=JSON.stringify(a);if(m.hasOwnProperty(p))return m[p];return m[p]=f.apply(null,a)}}
Math.factorial=Function.memoize(function(v){var p=1,n=2;while(n<=v)p*=n++;return p});


// ANSWER //
function countCombinationsGreaterThan(max) {
  var count = 0;
  for (var n = 23; n <= 100; n++)
  for (var r = 1; r <= n; r++) {
    var comb = Math.factorial(n) / (Math.factorial(r) * Math.factorial(n - r));
    if (comb > max)
      count++;
  }
  return count;
}

var result = countCombinationsGreaterThan(1000000);

console.log(result);

// 4075
