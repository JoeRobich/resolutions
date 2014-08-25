// http://jsfiddle.net/ocyeercu/

// PROBLEM //

/*
Using names.txt (right click and 'Save Link/Target As...'), a 46K text file
containing over five-thousand first names, begin by sorting it into alphabetical
order. Then working out the alphabetical value for each name, multiply this 
value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is
worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would
obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/

// ANSWER //

var names = []; // Load somehow
names.sort().reduce(function(sum, name, i) {
  var nameValue = 0;
  for (var index = 0; index < name.length; index++)
    nameValue += name.charCodeAt(index) - 64; // "A" is 65
  return sum + (nameValue * (i + 1));
}, 0);

// 871198282
