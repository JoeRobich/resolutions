// PROBLEM //

/*
Have the function LetterCapitalize(str) take the str parameter being
passed and capitalize the first letter of each word. Words will be
separated by only one space.
*/

// ANSWER //

function LetterCapitalize(str) {
  return str.split(' ').map(function(word) {
    var letters = word.split('');
    letters[0] = letters[0].toUpperCase();
    return letters.join('');
  }).join(' ');
}

LetterCapitalize(readline());
