// PROBLEM //

/*

Have the function FirstFactorial(num) take the num parameter being
passed and return the factorial of it (ie. if num = 4, return 
(4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}

// ANSWER //

function FirstFactorial(num) {
  return Array.range(1, ++num).reduce(function(fac, n) {
    return fac * n;
  }, 1);
}

FirstFactorial(readline());
