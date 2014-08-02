// PROBLEM //

/*
Have the function ABCheck(str) take the str parameter being passed and
return the string true if the characters a and b are separated by exactly
3 places anywhere in the string at least once (ie. "lane borrowed" would
result in true because there is exactly three characters between a and b).
Otherwise return the string false.
*/

// ANSWER //

function ABCheck(str) {
  var i = str.indexOf('a');
  while (i != -1 && i + 4 < str.length) {
    if (str.charAt(i + 4) == 'b')
      return true;
    i = str.indexOf('a', i + 1);
  }
  return false;
}

ABCheck(readline()); 
