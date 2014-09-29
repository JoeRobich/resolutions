#! node

// http://repl.it/0GW

// PROBLEM //

/*
An irrational decimal fraction is created by concatenating the positive
integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If d.n represents the nth digit of the fractional part, find the value of the
following expression.

d.1 × d.10 × d.100 × d.1000 × d.10000 × d.100000 × d.1000000
*/

// ANSWER //

function computeChampernownesDigits(n) {
  var digits = [];
  var digitIndex = 1;
  var i;

  for (i = 1; i < 10; i++)
    digits[digitIndex++] = i;

  for (i = 1; digitIndex < n; i++) {
    var numberDigits = i.toString().split('').map(Number);

    for (var j = 0; j < 10; j++) {
      for (var k = 0; k < numberDigits.length; k++)
        digits[digitIndex++] = numberDigits[k];

      digits[digitIndex++] = j;
    }
  }

  return digits;
}

function computeChampernownesProduct(digits) {
  var max = Math.max.apply(null, digits);
  var champernownesDigits = computeChampernownesDigits(max);
  return digits.reduce(function(p, n) { return p * champernownesDigits[n] }, 1);
}

var result = computeChampernownesProduct([1,10,100,1000,10000,100000,1000000]);

console.log(result);

// 210
