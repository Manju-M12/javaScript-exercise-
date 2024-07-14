// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481 ];

var report = getVisitorReport(visitors, 2);

console.log(report);

var reportForFriday = getVisitorReport(visitors, 5);
console.log(reportForFriday); // Output: "There were 481 visitors on Friday"
var getVisitorReport = function (visitorArray, dayInWeek) {
  var days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
  ];
  var index = dayInWeek - 1;
  var visitorReport;

  visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
  visitorReport += "on " + days[index];

  return visitorReport;
};

var visitors = [354, 132, 210, 221, 481, 195, 234]; // Added Saturday and Sunday

var reportForFriday = getVisitorReport(visitors, 5);
console.log(reportForFriday); // "There were 481 visitors on Friday"

var reportForSunday = getVisitorReport(visitors, 7);
console.log(reportForSunday); // "There were 234 visitors on Sunday"
var getMonthlyVisitorReport = function (monthArray, weekNumber, dayInWeek) {
  var week = monthArray[weekNumber - 1]; // Access the specific week array
  return getVisitorReport(week, dayInWeek); // Call the existing function
};
var week1 = [354, 132, 210, 221, 481, 195, 234]; // Data for Week 1
var week2 = [123, 456, 789, 101, 112, 131, 415]; // Data for Week 2
var week3 = [543, 210, 321, 432, 543, 654, 765]; // Data for Week 3
var week4 = [876, 987, 654, 321, 123, 432, 567]; // Data for Week 4

var month = [week1, week2, week3, week4]; // Array of weeks

// Test the new function
console.log(getMonthlyVisitorReport(month, 2, 3)); // "There were 789 visitors on Wednesday"
console.log(getMonthlyVisitorReport(month, 4, 7)); // "There were 567 visitors on Sunday"


/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */