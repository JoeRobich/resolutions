#! node

//

// PROBLEM //

/*
The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
Array.fill=function(s,v){var a=[],i=0;while(i++<s)a.push(v);return a}

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

    for (var index = 0; index < aDigits.length; index++) {
      var aDigit = aDigits[index];
      var product = aDigit * bDigit + carry;
      productDigits.push(product % 10);
      carry = product / 10 | 0;
    }

    if (carry)
      productDigits.push(carry);

    products.push(productDigits.reverse().join(''));
    return products;
  },[]).reduce(add);
}

function power(a, b) {
  a = a.toString();

  var prod = a;
  while (--b)
    prod = multiply(prod, a);

  return prod;
}

var result = Array.range(1, 1001).map(function(n){return power(n, n)}).reduce(function(s,n){return add(s, n)}).substr(-10);

console.log(result);

// 9110846700
