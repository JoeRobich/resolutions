// http://repl.it/W1x

// PROBLEM //

/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

// HELPERS //

Array.prototype.fill=function(v){var i=0,a=[];while(i++<this.length)a.push(v);return a}
Array.prototype.sum=function(){return this.reduce(function(s,n){return s+n})};

// ANSWER //

function getPrimesTo(n) {
  function getPrimeMap(n) {
    var primeMap = new Array(n).fill(true);
    primeMap[0]=primeMap[1]=false;

    var sqrtN = Math.sqrt(n);
    for (i = 2; i < sqrtN; i++)
      if (primeMap[i])
        for (j = i * i; j < n; j += i)
          primeMap[j] = false;

    return primeMap;
  }

  return getPrimeMap(n).reduce(function(p,f,i) {
    if (f)
      p.push(i);
    return p;
  }, []);
}


getPrimesTo(2000000).sum();

// 142913828922
