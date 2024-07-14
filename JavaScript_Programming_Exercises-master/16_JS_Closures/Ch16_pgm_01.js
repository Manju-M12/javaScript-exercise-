// Level 1

// Create a closure which has one inner function

// Level 2

// Create a closure which has three inner functions

// Level 3

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner 
// variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance inner functions. Incomes is a set of incomes and its description and 
// expenses is also a set of expenses and its description.
// Level 1: Basic Closure

function createGreeting(greeting) {
    return function(name) {
        console.log(greeting + ', ' + name + '!');
    };
}

const greetHello = createGreeting('Hello');
greetHello('Alice');  // Outputs: Hello, Alice!
// Level 2: Closure with Three Inner Functions

function createCounter() {
    let count = 0;

    function increment() {
        count++;
    }

    function decrement() {
        count--;
    }

    function getCount() {
        return count;
    }

    // Return an object with three inner functions
    return {
        increment: increment,
        decrement: decrement,
        getCount: getCount
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());  // Outputs: 2
counter.decrement();
console.log(counter.getCount());  // Outputs: 1
// Level 3: PersonAccount Function

function personAccount(firstname, lastname) {
    let incomes = [];
    let expenses = [];

    function totalIncome() {
        return incomes.reduce((total, income) => total + income.amount, 0);
    }

    function totalExpense() {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    function accountInfo() {
        return {
            firstname: firstname,
            lastname: lastname,
            totalIncome: totalIncome(),
            totalExpense: totalExpense(),
            balance: totalIncome() - totalExpense()
        };
    }

    function addIncome(description, amount) {
        incomes.push({ description, amount });
    }

    function addExpense(description, amount) {
        expenses.push({ description, amount });
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        addIncome: addIncome,
        addExpense: addExpense,
        accountInfo: accountInfo,
        accountBalance: accountBalance
    };
}

// Example Usage
const myAccount = personAccount('John', 'Doe');

myAccount.addIncome('Salary', 5000);
myAccount.addIncome('Freelancing', 2000);
myAccount.addExpense('Rent', 1500);
myAccount.addExpense('Utilities', 200);

console.log(myAccount.accountInfo());  
// Outputs: { firstname: 'John', lastname: 'Doe', totalIncome: 7000, totalExpense: 1700, balance: 5300 }

console.log('Account Balance:', myAccount.accountBalance());  // Outputs: 5300
