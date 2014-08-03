// PROBLEM //

/*
Using the JavaScript language, have the function PrimeMover(num) return the
numth prime number. The range will be from 1 to 10^4. For example: if num is
16 the output should be 53 as 53 is the 16th prime number.
*/

// HELPERS //

Number.prototype.isPrime=function(){for(var n=2;n<this;)if(!(this%n++))return !1;return !0}

// ANSWER //

var getNextPrime = function(number, max) {
  while(++number <= max)
    if (number.isPrime())
      return number;
}

function PrimeMover(num) {
  var prime = 1;
  for (var i = 0; i < num; i++)
    prime = getNextPrime(prime, 1000)
  return prime;
}

PrimeMover(readline());
