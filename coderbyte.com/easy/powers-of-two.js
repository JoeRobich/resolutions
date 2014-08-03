// PROBLEM //

/*
Using the JavaScript language, have the function PowersofTwo(num) take the
num parameter being passed which will be an integer and return the string
true if it's a power of two. If it's not return the string false. For
example if the input is 16 then your program should return the string true
but if the input is 22 then the output should be the string false.
*/

// ANSWER //

function PowersofTwo(num) {
  var power = 0;
  var number = Math.pow(2, power);
  while (number < num)
    number = Math.pow(2, ++power);
  return num == number;
}

PowersofTwo(readline());
