#! node
"use strict";

// PROBLEM //

/*
Starting with the number 1 and moving to the right in a clockwise direction a 5
by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed
in the same way?
*/

// HELPERS //


// ANSWER //

function calculateDiagonals(size) {
  var sum = 1;
  size--;

  for (var i = 0; i < size / 2; i++) {
    var length = (i * 2) + 3;
    var ur = length * length;
    var ul = ur - (length - 1);
    var ll = ul - (length - 1);
    var lr = ll - (length - 1);
    sum += ur + ul + ll + lr;
  }

  return sum;
}

var result = calculateDiagonals(1001);

console.log(result);

// 669171001
