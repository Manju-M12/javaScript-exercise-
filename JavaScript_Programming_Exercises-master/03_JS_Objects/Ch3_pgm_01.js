// Using variables to represent a book

var bookTitle;
var bookAuthor;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);

var secondBookTitle;
var secondBookAuthor;

secondBookTitle = "1984";
secondBookAuthor = "George Orwell";

console.log(secondBookTitle + " by " + secondBookAuthor);
var thirdBookTitle;
var thirdBookAuthor;

thirdBookTitle = "To Kill a Mockingbird";
thirdBookAuthor = "Harper Lee";

console.log(thirdBookTitle + " by " + thirdBookAuthor);
var books = [
    { title: "The Hobbit", author: "J. R. R. Tolkien" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
   
];

for (var i = 0; i < books.length; i++) {
    console.log(books[i].title + " by " + books[i].author);
}

/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */