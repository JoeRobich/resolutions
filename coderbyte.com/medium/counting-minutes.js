// PROBLEM //

/*
Using the JavaScript language, have the function CountingMinutesI(str) take
the str parameter being passed which will be two times (each properly
formatted with a colon and am or pm) separated by a hyphen and return the
total number of minutes between the two times. The time will be in a 12 hour
clock format. For example: if str is 9:00am-10:00am then the output should
be 60. If str is 1:00pm-11:00am the output should be 1320.
*/

// ANSWER //

var minutesInADay = 24 * 60;

function minutesFromMidnight(time) {
  var parts = time.split(':');
  var hours = parseInt(parts[0]);
  var minutes = parseInt(parts[1].substr(0,2));

  if (hours == 12)
    hours = 0;

  if (parts[1].charAt(2) == 'p')
    hours += 12;

  return (hours * 60) + minutes;
}

function CountingMinutes(str) {
  var times = str.split('-');
  var start = minutesFromMidnight(times[0]);
  var end = minutesFromMidnight(times[1]);

  if (start > end)
    end += minutesInADay;

  return end - start;
}

CountingMinutes(readline());
