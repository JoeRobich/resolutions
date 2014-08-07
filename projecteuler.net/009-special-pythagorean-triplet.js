// http://repl.it/W02

// PROBLEM //

/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a^2 + b^2 = c^2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a};

// ANSWER //

var findProduct = function(target) {
  var third = (target / 3) | 0;
  var squares = Array.range(0, target + 1).map(function(n) { return n * n; });

  for (var a = 1; a < third; a++) {
    for (var b = a + 1; b < (target - a) / 2; b++) {
      var c = target - a - b;

      if (squares[a] + squares[b] == squares[c])
        return a * b * c;
    }
  }
};

findProduct(1000);

// 31875000
