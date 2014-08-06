// http://repl.it/WYh/1

// PROBLEM //

/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

// HELPERS //

Array.prototype.any=function(f){for(var i=0;i<this.length;)if(f(this[i++]))return !0;return !1};

// ANSWER //

var isMultiple = function(number, factors) {
  return factors.any(function(factor) {
    return !(number % factor);
  });
};

var getNthPrime = function(n) {
  var primes = [2];

  var getNextPrime = function(number) {
    number += (number == 2) ? 1 : 2;
    while (isMultiple(number, primes))
      number += 2;
    return number;
  };

  var prime = primes[0];

  while (n > primes.length) {
    prime = getNextPrime(prime);
    primes.push(prime);
  }

  return prime;
};

getNthPrime(10001);

// 104743
