// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

var movie2 = {
  title: "The Shawshank Redemption",
  actors: "Tim Robbins, Morgan Freeman",
  directors: "Frank Darabont"
};

console.log("\nMovie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");
var blogPost = {
  id: 1,
  title: "JavaScript Basics",
  author: "John Doe",
  created: "2023-07-05",
  body: "JavaScript is a powerful programming language used for web development..."
};
console.log("\nBlog Post information:");
console.log("----------------------");
console.log("Title: " + blogPost.title);
console.log("Author: " + blogPost.author);
console.log("Created Date: " + blogPost.created);
console.log("Body: " + blogPost.body);
console.log("----------------------");

/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */