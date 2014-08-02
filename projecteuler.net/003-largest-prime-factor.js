// http://jsfiddle.net/J2a2r/

// PROBLEM //

/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

// HELPERS //

Number.prototype.isPrime=function(){for(var n=2;n<this;)if(!(this%n++))return !1;return !0}

// ANSWER //

var getNextPrime = function(number, max) {
  while(++number <= max)
    if (number.isPrime())
      return number;
}

var getLargestPrimeFactor = function(number) {
  var largestPrime;
  var prime = getNextPrime(1, number);
  while (prime <= number) {
    if (!(number % prime)) {
      number = number / prime;
      largestPrime = prime;
    }
    else
      prime = getNextPrime(prime, number);
  }
  return largestPrime;
}

var number = 600851475143;
var result = getLargestPrimeFactor(number);

// 6857
