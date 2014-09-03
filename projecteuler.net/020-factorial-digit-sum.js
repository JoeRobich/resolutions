#! node

// http://repl.it/X23

// PROBLEM //

/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

// HELPERS //

Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a}
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)})}

// ANSWER //

function add(a, b) {
  var aDigits = a.split('').map(Number).reverse();
  var bDigits = b.split('').map(Number).reverse();
  var length = Math.max(aDigits.length, bDigits.length);

  var sumDigits = [];
  var carry = 0;
  for (var index = 0; index < length; index++) {
    var aDigit = aDigits[index] || 0;
    var bDigit = bDigits[index] || 0;

    var sum = aDigit + bDigit + carry;

    sumDigits.push(sum % 10);
    carry = sum / 10 | 0;
  }

  if (carry)
    sumDigits.push(carry);

  return sumDigits.reverse().join('');
}

function multiply(a, b) {
  var aDigits = a.split('').map(Number).reverse();
  var bDigits = b.split('').map(Number).reverse();

  return bDigits.reduce(function(products, bDigit, index) {
    var productDigits = Array.fill(index, 0);
    var carry = 0;
    aDigits.forEach(function(aDigit) {
        var product = aDigit * bDigit + carry;
        productDigits.push(product % 10);
        carry = product / 10 | 0;
    });

    if (carry)
      productDigits.push(carry);

    products.push(productDigits.reverse().join(''));
    return products;
  },[]).reduce(add);
}

function factorial(n) {
  var fac = n.toString();

  for (n--; n > 1; n--)
    fac = multiply(fac, n.toString());

  return fac;
}

var result = factorial(100).split('').map(Number).sum();

console.log(result);
// 648
