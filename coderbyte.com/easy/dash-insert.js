// PROBLEM //

/*
Using the JavaScript language, have the function DashInsert(num) insert
dashes ('-') between each two odd numbers in num. For example: if num is
454793 the output should be 4547-9-3. Don't count zero as an odd number.
*/

// ANSWER //

function DashInsert(num) {
  var previous = NaN;
  return num.toString().split('').map(function(digit) {
    var prev = previous;
    previous = digit;
    if (!isNaN(prev) && (prev % 2 && digit % 2))
        return "-" + digit;
    return digit;
  }).join('');
}

DashInsert(readline());
