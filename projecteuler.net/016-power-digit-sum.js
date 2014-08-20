// http://repl.it/XHa

// PROBLEM //

/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

// HELPERS //

Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)})}

// ANSWER //

function powerOfTwo(n) {
  function double(number) {
    var c = 0;
    var r = number.split('').reverse().reduce(function(p, d){
      d = d * 2 + c;
      if (d > 9) {
        c = 1;
        d -= 10;
      }
      else
        c = 0;
      return d + p;
    }, '');
    return c ? c + r : r;
  }

  var r = "1";
  for (var i = 0; i < n; i++)
    r = double(r);
  return r;
}

powerOfTwo(1000).split('').map(Number).sum();

// 1366
