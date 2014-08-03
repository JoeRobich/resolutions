// PROBLEM //

/*
Using the JavaScript language, have the function PrimeTime(num) take the num
parameter being passed and return the string true if the parameter is a prime
number, otherwise return the string false. The range will be between 1 and 2^16.
*/

// HELPERS //

Number.prototype.isPrime=function(){for(var n=2;n<this;)if(!(this%n++))return !1;return !0}

// ANSWER //

function PrimeTime(num) {
  return num.isPrime();
}

PrimeTime(readline());
