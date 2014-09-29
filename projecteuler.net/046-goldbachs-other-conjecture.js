#! node

// http://repl.it/0Fh

// PROBLEM //

/*
It was proposed by Christian Goldbach that every odd composite number can be
written as the sum of a prime and twice a square.

9 = 7 + 2×1^2
15 = 7 + 2×2^2
21 = 3 + 2×3^2
25 = 7 + 2×3^2
27 = 19 + 2×2^2
33 = 31 + 2×1^2

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime
and twice a square?
*/

// HELPERS //

Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a}
Array.prototype.any=function(f){for(var i=0;i<this.length;)if(f(this[i++]))return !0;return !1}

// ANSWER //

function getPrimeMap(n) {
  var primeMap = Array.fill(n, true);
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

function isTwiceSquare(n) {
    var r = Math.sqrt(n / 2);
    return (r|0) === r;
}

function findProof() {
  var primeMap = getPrimeMap(10000);
  var primes = Object.keys(primeMap);

  for (var i = 35; i < 10000; i += 2) {
    if (primeMap[i])
      continue;

    if (!primes.any(function(p) { return isTwiceSquare(i - p); }))
      return i;
  }
}

var result = findProof();

console.log(result);

// 5777
