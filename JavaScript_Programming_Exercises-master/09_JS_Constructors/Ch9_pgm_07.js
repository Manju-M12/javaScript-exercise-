// A quiz question constructor

var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");

question1.showQuestion();
question1.addOption("Lyon");

var question2 = new QuizQuestion(
    "What is the smallest planet in our solar system?",
    "Mercury"
);

question2.addOption("Mars");
question2.addOption("Venus");
question2.addOption("Mercury");
question2.addOption("Earth");
question2.addOption("Pluto");

var question3 = new QuizQuestion(
    "Which element is known as 'gold' on the periodic table?",
    "Gold"
);

question3.addOption("Gold");
question3.addOption("Silver");
question3.addOption("Iron");
question3.addOption("Copper");
question3.addOption("Platinum");
question2.showQuestion();
console.log(question2.answer);

/* Further Adventures
 *
 * 1) Add a fifth option to question1.
 *
 * 2) Create two more questions.
 *
 * 3) At the console prompt type
 *    question2.showQuestion();
 *    Press Enter
 *
 * 4) At the console prompt type
 *    question2.answer;
 *    Press Enter
 *
 */