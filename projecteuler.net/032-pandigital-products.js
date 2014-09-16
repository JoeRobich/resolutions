#! node

// http://repl.it/ZEW

// PROBLEM //

/*
We shall say that an n-digit number is pandigital if it makes use of all the
digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through
5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing
multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can
be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only
include it once in your sum.
*/

// HELPERS //

Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)})}

// ANSWER //

function findPandigitalProductSum(key) {
  var pandigitalProducts = {};

  for (var a = 0; a < 9999; a++)
  for (var b = 0; b < 9999 - a; b++) {
    var c = a * b;

    var digits = a.toString() + b.toString() + c.toString();
    if (digits.length != key.length)
      continue;

    digits = digits.split('').sort().join('');

    if (digits != key)
      continue;

    pandigitalProducts[c] = 1;
  }

  return Object.keys(pandigitalProducts).map(Number).sum();
}

var result = findPandigitalProductSum("123456789");

console.log(result);

// 45228
