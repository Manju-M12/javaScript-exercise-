// Level 1

// Store you first name, last name, age, country, city in your browser localStorage.


// Level 2

// Create a student object. The student object will have first name, last name, age, skills, 
// country, enrolled keys and values for the keys. Store the student object in your browser 
// localStorage.


// Level 3

// Create an object called personAccount. It has firstname, lastname, incomes, expenses 
// properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance methods. Incomes is a set of incomes and its description and expenses is 
// also a set of expenses and its description.
// Level 1: Store Personal Information
const firstName = 'John';
const lastName = 'Doe';
const age = 30;
const country = 'USA';
const city = 'New York';

localStorage.setItem('firstName', firstName);
localStorage.setItem('lastName', lastName);
localStorage.setItem('age', age);
localStorage.setItem('country', country);
localStorage.setItem('city', city);

console.log('First Name:', localStorage.getItem('firstName'));
console.log('Last Name:', localStorage.getItem('lastName'));
console.log('Age:', localStorage.getItem('age'));
console.log('Country:', localStorage.getItem('country'));
console.log('City:', localStorage.getItem('city'));

// Level 2: Create and Store a Student Object
const student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  skills: ['JavaScript', 'React', 'Node.js'],
  country: 'Canada',
  enrolled: true
};

localStorage.setItem('student', JSON.stringify(student));

const storedStudent = JSON.parse(localStorage.getItem('student'));
console.log('Student Object:', storedStudent);

// Level 3: Create `personAccount` Object with Methods
const personAccount = {
  firstName: 'Alice',
  lastName: 'Johnson',
  incomes: [],
  expenses: [],
  
  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },
  
  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },
  
  totalIncome: function () {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },
  
  totalExpense: function () {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },
  
  accountInfo: function () {
    return `Account holder: ${this.firstName} ${this.lastName}`;
  },
  
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  }
};

personAccount.addIncome('Salary', 5000);
personAccount.addIncome('Freelance', 1500);
personAccount.addExpense('Rent', 1200);
personAccount.addExpense('Groceries', 300);

console.log(personAccount.accountInfo());
console.log('Total Income:', personAccount.totalIncome());
console.log('Total Expense:', personAccount.totalExpense());
console.log('Account Balance:', personAccount.accountBalance());
