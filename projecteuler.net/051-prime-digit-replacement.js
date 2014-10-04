#! node

// http://repl.it/0cz

// PROBLEM //

/*
By replacing the 1st digit of the 2-digit number *3, it turns out that six of
the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit
number is the first example having seven primes among the ten generated numbers,
yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993.
Consequently 56003, being the first member of this family, is the smallest prime
with this property.

Find the smallest prime which, by replacing part of the number (not necessarily
adjacent digits) with the same digit, is part of an eight prime value family.
*/

// HELPERS //

Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a}
String.prototype.setChar=function(i,c){return this.substr(0,i)+c+this.substr(i+1)}

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

function generateTemplates(number) {
  var templates = [];

  for (var index1 = 0; index1 < number.length - 2; index1++)
  for (var index2 = index1 + 1; index2 < number.length - 1; index2++)
  for (var index3 = index2 + 1; index3 < number.length; index3++) {
    templates.push(number.setChar(index1, "*").setChar(index2, "*").setChar(index3, "*"));
  }

  return templates;
}

function findSmallestReplaceablePrime(target) {
  var primeMap = getPrimeMap(999999);
  var primes = Object.keys(primeMap).filter(function(p){return p > 99999});

  for (var i = 0; i < primes.length; i++) {
    var prime = primes[i];

    var templates = generateTemplates(prime);
    for (var j = 0; j < templates.length; j++) {
      var template = templates[j];

      var matches = [];
      for (var k = 0; k <= 9; k++) {
        var potential = template.replace(/\*/g, k);
        if (primeMap[potential])
          matches.push(potential);
      }

      if (matches.length == target) {
        return matches[0];
      }
    }
  }
}

var result = findSmallestReplaceablePrime(8);

console.log(result);

// 121313
