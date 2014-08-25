// http://repl.it/X25/1

// PROBLEM //

/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n
which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and
each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55
and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and
142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

// HELPERS //

Number.prototype.factors=function(){var a=[],t=this,l=1,h=t;while(l<h){if(!(t%l)){h=t/l;a.push(l);if(h!=l)a.push(h)}l++}return a}
Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
Array.prototype.sum=function(f){f=f||function(i){return i};return this.length?this.reduce(function(s,n){return s+f(n)}):0}

// ANSWER //

function getSumOfAmicablesTo(n) {
  function isAmicable(a) {
    var b = a.factors().sum() - a;
    var c = b.factors().sum() - b;
    return a != b && a == c;
  }
  return Array.range(2, n).filter(isAmicable).sum();
}

getSumOfAmicablesTo(10000);

// 31626
