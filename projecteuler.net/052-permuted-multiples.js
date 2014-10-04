#! node

// http://repl.it/0dA/1

// PROBLEM //

/*
It can be seen that the number, 125874, and its double, 251748, contain exactly
the same digits, but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain
the same digits.
*/

// HELPERS //

Function.memoize=function(f){var m={};return function(){var a=arguments;p=JSON.stringify(a);if(m.hasOwnProperty(p))return m[p];return m[p]=f.apply(null,a)}}

// ANSWER //

var makeKey = Function.memoize(function(number) {
  return number.toString().split('').sort().join('');
});

function findSmallestPermutedMultiple() {
  for (var x = 125874; true; x++) {
    var xKey = makeKey(x);

    var x2 = x * 2;
    if (xKey != makeKey(x2))
        continue;

    var x3 = x * 3;
    if (xKey != makeKey(x3))
        continue;

    var x4 = x * 4;
    if (xKey != makeKey(x4))
        continue;

    var x5 = x * 5;
    if (xKey != makeKey(x5))
        continue;

    var x6 = x * 6;
    if (xKey == makeKey(x6))
      return x;
  }
}

var result  = findSmallestPermutedMultiple();

console.log(result);

// 142857
