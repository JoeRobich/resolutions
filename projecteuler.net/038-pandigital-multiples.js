#! node

// http://repl.it/0Et

// PROBLEM //

/*
Take the number 192 and multiply it by each of 1, 2, and 3:

192 × 1 = 192
192 × 2 = 384
192 × 3 = 576
By concatenating each product we get the 1 to 9 pandigital, 192384576. We will
call 192384576 the concatenated product of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and
5, giving the pandigital, 918273645, which is the concatenated product of 9 and
(1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the
concatenated product of an integer with (1,2, ... , n) where n > 1?
*/

// HELPERS //

String.prototype.isPandigital=function(){return "123456789"==this.split('').sort().join('')}

// ANSWER //

function findLargestPandigitalMuliple() {
  var largestPandigital = 0;

  var number = 1;
  while (true) {

    var multiple = 1;
    var sum = "";
    while (true) {
      sum += (number * multiple).toString();

      if (sum.length >= 9)
        break;

      multiple++;
    }

    if (multiple == 1 || (multiple == 2 && sum.length > 9))
      break;

    if (sum.isPandigital()) {
      var pandigital = parseInt(sum);
      if (pandigital > largestPandigital)
        largestPandigital = pandigital;
    }

    number++;
  }

  return largestPandigital;
}

var result = findLargestPandigitalMuliple();

console.log(result);

// 932718654
