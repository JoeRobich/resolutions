// http://repl.it/XKi

// PROBLEM //

/*
You are given the following information, but you may prefer to do some research
for yourself.

1 Jan 1900 was a Monday.

Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.

A leap year occurs on any year evenly divisible by 4, but not on a century
unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century
(1 Jan 1901 to 31 Dec 2000)?
*/

// ANSWER //

var isLeapYear = function(year) { return (!(year % 4) && (year % 100)) || !(year % 400); };

var normalDaysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var leapYearDaysInMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var sundays = 0

// 1 Jan 1900 was a Monday.
var dayOfWeek = 1 // using 0 (Sunday) - 6 (Saturday)

// Calculate day of the week for Jan 1st, 1901
var daysIn1900 = isLeapYear(1900) ? 366 : 365;
dayOfWeek += daysIn1900 % 7;

// during the twentieth century (1 Jan 1901 to 31 Dec 2000)
var year = 1901;
while (year < 2001) {
  var daysInMonth;
  if (isLeapYear(year))
    daysInMonth = leapYearDaysInMonth;
  else
    daysInMonth = normalDaysInMonth;

  for (var month = 1; month <= 12; month++) {
    // Sundays fell on the first of the month
    if (dayOfWeek == 0)
      sundays++;

    days = daysInMonth[month];
    dayOfWeek = (dayOfWeek + (days % 7)) % 7;
  }

  year++;
}

sundays;

// 171
