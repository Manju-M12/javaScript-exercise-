// A calendar event constructor

var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;
  
    this.showEvent = function () {
        var dateString = [
            this.startDate,
            ", from ",
            this.startTime,
            " to ",
            this.endTime
        ].join("");
      
        console.log(this.title);
        console.log(dateString);
    };
};

var calEvent = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
);

calEvent.showEvent();

var calEvent2 = new CalendarEvent(
    "Project Deadline",
    "4/5/16",
    "9.00am",
    "5.00pm"
);

calEvent2.showEvent();
CalendarEvent.prototype.showEvent = function () {
    var dateString = [
        this.startDate,
        ": ",
        this.startTime,
        " - ",
        this.endTime
    ].join("");
  
    console.log(this.title + ": " + dateString);
};
CalendarEvent.prototype.getDuration = function () {
    var [startHour, startMinute] = this.startTime.split(/[:.]/).map(Number);
    var [endHour, endMinute] = this.endTime.split(/[:.]/).map(Number);

    // Convert times to minutes
    var startTimeInMinutes = startHour * 60 + startMinute;
    var endTimeInMinutes = endHour * 60 + endMinute;

    // Duration in minutes
    var durationInMinutes = endTimeInMinutes - startTimeInMinutes;

    return durationInMinutes;
};
console.log(calEvent.getDuration());  // Example output: 60


/* Further Adventures
 *
 * 1) Add a second event.
 *
 * 2) Call the showEvent method on your
 *    new calendar event.
 *
 * 3) Update the showEvent method so that
 *    its output looks like this:
 *    Annual Review: 3/5/16 - (4.00pm - 5.00pm)
 *
 */