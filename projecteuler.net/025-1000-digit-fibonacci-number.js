#! node --harmony
"use strict";

// PROBLEM //

/*
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the first term in the Fibonacci sequence to contain 1000 digits?
*/

// HELPERS //

function add(a, b) {
  var aDigits = a.split('').map(Number).reverse();
  var bDigits = b.split('').map(Number).reverse();
  var length = Math.max(aDigits.length, bDigits.length);

  var sumDigits = [];
  var carry = 0;
  for (var index = 0; index < length; index++) {
    var aDigit = aDigits[index] || 0;
    var bDigit = bDigits[index] || 0;

    var sum = aDigit + bDigit + carry;

    sumDigits.push(sum % 10);
    carry = sum / 10 | 0;
  }

  if (carry)
    sumDigits.push(carry);

  return sumDigits.reverse().join('');
}

// ANSWER //

function* fibonacci() {
  let a = "1";
  yield a;
  let b = "1";
  yield b;

  while (true) {
    let c = add(a, b);
    a = b;
    b = c;
    yield b;
  }
}

function findTermByLength(length) {
  let term = 0;
  for (let number of fibonacci()) {
    term++;
    if (number.length === length)
      return term;
  }
}

let result = findTermByLength(1000);

console.log(result);

//4782
