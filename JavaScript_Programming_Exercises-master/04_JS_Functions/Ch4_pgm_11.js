// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

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

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var quizQuestion1;
var quizQuestion2;
var quizQuestion3;
var quizQuestion;
var showQuizQuestion;

// Define the quiz questions
quizQuestion1 = {
    question: "What is the capital of France?",
    options: ["1) Berlin", "2) Madrid", "3) Paris", "4) Rome"],
    answer: "3) Paris"
};

quizQuestion2 = {
    question: "Which planet is known as the Red Planet?",
    options: ["1) Earth", "2) Mars", "3) Jupiter", "4) Venus"],
    answer: "2) Mars"
};

quizQuestion3 = {
    question: "What is the largest ocean on Earth?",
    options: ["1) Atlantic Ocean", "2) Indian Ocean", "3) Arctic Ocean", "4) Pacific Ocean"],
    answer: "4) Pacific Ocean"
};

// Define the function to show quiz questions
showQuizQuestion = function () {
    console.log(quizQuestion.question);
    console.log("Options:");
    quizQuestion.options.forEach(option => console.log(option));
    console.log("Answer: " + quizQuestion.answer);
};

// Display all quiz questions
quizQuestion = quizQuestion1;
showQuizQuestion();

quizQuestion = quizQuestion2;
showQuizQuestion();

quizQuestion = quizQuestion3;
showQuizQuestion();


/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */