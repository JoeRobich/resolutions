#! node

// http://repl.it/Z29

// PROBLEM //

/*
The number, 197, is called a circular prime because all rotations of the
digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37,
71, 73, 79, and 97.

How many circular primes are there below one million?
*/

// HELPERS //

Array.prototype.fill=function(v){var i=0,a=[];while(i++<this.length)a.push(v);return a}
Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}

// ANSWER //

function getPrimeMap(n) {
  var primeMap = new Array(n).fill(true);
  primeMap[0]=primeMap[1]=false;

  var sqrtN = Math.sqrt(n);
  for (var i = 2; i < sqrtN; i++)
    if (primeMap[i])
      for (var j = i * i; j < n; j += i)
        primeMap[j] = false;

  return primeMap.reduce(function(p,f,i){
    if (f)
      p[i]=!0;
    return p
  },{});
}

function countCircularPrimes(max) {
  var primeMap = getPrimeMap(max);
  var primes = Object.keys(primeMap);

  return primes.filter(function(p) {
    var digits = p.split('');
    for (var i = 1; i < digits.length; i++) {
      var first = digits.shift();
      digits.push(first);

      if (!primeMap[digits.join('')])
        return false;
    }
    return true;
  }).length;
}

var result = countCircularPrimes(1000000);

console.log(result);

// 55
