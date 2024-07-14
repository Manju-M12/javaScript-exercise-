// Displaying information from similar objects

var movie1;
var movie2;
var movie3;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");

var movie4 = {
  title: "The Dark Knight",
  actors: "Christian Bale, Heath Ledger",
  directors: "Christopher Nolan"
};

console.log("\nMovie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------");
console.log("\n");
var event1 = {
  title: "Company Anniversary Celebration",
  date: "2023-08-15",
  location: "Headquarters"
};

var event2 = {
  title: "Team Building Retreat",
  date: "2023-09-22",
  location: "Mountain Resort"
};

var event3 = {
  title: "Annual Charity Gala",
  date: "2023-10-30",
  location: "City Convention Center"
};
console.log("Event information for " + event1.title);
console.log("------------------------------");
console.log("Date: " + event1.date);
console.log("Location: " + event1.location);
console.log("------------------------------");

console.log("\nEvent information for " + event2.title);
console.log("------------------------------");
console.log("Date: " + event2.date);
console.log("Location: " + event2.location);
console.log("------------------------------");

console.log("\nEvent information for " + event3.title);
console.log("------------------------------");
console.log("Date: " + event3.date);
console.log("Location: " + event3.location);
console.log("------------------------------");

/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */