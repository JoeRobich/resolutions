// http://repl.it/0pt/2

// PROBLEM //

/*
It is possible to show that the square root of two can be expressed as an
infinite continued fraction.

√ 2 = 1 + 1/(2 + 1/(2 + 1/(2 + ... ))) = 1.414213...

By expanding this for the first four iterations, we get:

1 + 1/2 = 3/2 = 1.5
1 + 1/(2 + 1/2) = 7/5 = 1.4
1 + 1/(2 + 1/(2 + 1/2)) = 17/12 = 1.41666...
1 + 1/(2 + 1/(2 + 1/(2 + 1/2))) = 41/29 = 1.41379...

The next three expansions are 99/70, 239/169, and 577/408, but the eighth
expansion, 1393/985, is the first example where the number of digits in the
numerator exceeds the number of digits in the denominator.

In the first one-thousand expansions, how many fractions contain a numerator
with more digits than denominator?
*/

// HELPERS //

function request(u){return new Promise(function(s,f){var x=new XMLHttpRequest();x.open("GET",u,!0);x.onload=function(e){if(x.readyState==4)if(x.status==200)s(eval.call(0,x.responseText));else f(x.statusText)};x.onerror=function(e){f(x.statusText)};x.send()})}

// ANSWER //

function countInterationsWithLongerNumerator(max) {
  var numerator = new BigNumber(3);
  var denominator = new BigNumber(2);
  var count = 0;

  for (var iteration = 0; iteration < max; iteration++) {
    var temp = denominator.times(2);
    denominator = denominator.plus(numerator);
    numerator = numerator.plus(temp);

    if (numerator.toString(10).length > denominator.toString(10).length)
      count++;
  }

  return count;
}

function main() {
  return countInterationsWithLongerNumerator(1000);
}

// RUNNER //

Promise.all([
  request("http://cdnjs.cloudflare.com/ajax/libs/bignumber.js/1.4.1/bignumber.min.js")
]).then(main).then(console.log);
console.log("Running...");

// 153
