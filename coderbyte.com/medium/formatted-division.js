// PROBLEM //

/*
Using the JavaScript language, have the function FormattedDivision(num1,num2)
take both parameters being passed, divide num1 by num2, and return the result
as a string with properly formatted commas and 4 significant digits after the
decimal place. For example: if num1 is 123456789 and num2 is 10000 the output
should be "12,345.6789". The output must contain a number in the one's place
even if it is a zero.
*/

// ANSWER //

function FormattedDivision(num1, num2) {

  var parts = (num1 / num2).toFixed(4).toString()
    .split('.');
  var integer = parts[0].split('')
    .reverse()
    .reduce(function(a,c,i){
      if (i && !(i % 3))
        a.push(',');
      a.push(c);
      return a;
    },[])
    .reverse()
    .join('');
  return integer + "." + parts[1];
}

FormattedDivision(readline());
