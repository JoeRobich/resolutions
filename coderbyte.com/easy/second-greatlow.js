// PROBLEM //

/*
Using the JavaScript language, have the function SecondGreatLow(arr)
take the array of numbers stored in arr and return the second lowest
and second greatest numbers, respectively, separated by a space. For
example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98.
The array will not be empty and will contain at least 2 numbers. It can
get tricky if there's just two numbers!
*/

// HELPERS //

Array.prototype.contains=function(i){return this.indexOf(i)!=-1}
Array.prototype.unique=function(){return this.reduce(function(u,i){if(!u.contains(i))u.push(i);return u},[])}
function lambda(f){var a=f.indexOf('=>');return Function(f.substr(0,a).replace(/[(,)]/g,' ').split(' ').filter(String),"return "+f.substr(a+2))}

// ANSWER //

function SecondGreatLow(arr) {
  arr = arr.sort(lambda("a, b => a - b")).unique();
  return [arr[1], arr[arr.length - 2]].join(' ');
}

SecondGreatLow(readline());
