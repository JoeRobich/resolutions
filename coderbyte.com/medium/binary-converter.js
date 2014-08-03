// PROBLEM //

/*
Have the function BinaryConverter(str) return the decimal form of the binary
value. For example: if 101 is passed return 5, or if 1000 is passed return 8.
*/

// ANSWER //

function BinaryConverter(str) {
  return str.split('').map(Number).reverse().reduce(function(num, d, i) {
    if (d)
      return num + Math.pow(2, i);
    return num;
  }, 0);
}

BinaryConverter(readline());
