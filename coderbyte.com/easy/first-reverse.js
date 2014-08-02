// PROBLEM //

/*
Have the function FirstReverse(str) take the str parameter being
passed and return the string in reversed order.
*/

// HELPERS //

String.prototype.reverse=function(){return this.split('').reverse().join('')}

// ANSWER //

function FirstReverse(str) {
  return str.reverse();
}

FirstReverse(readline());
