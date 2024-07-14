// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.

// 1. Even numbers background is green
// 2. Odd numbers background is yellow
// 3. Prime numbers background is red
// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Function to create a number item with appropriate styles
function createNumberItem(num) {
    const item = document.createElement('div');
    item.className = 'number-item';
    item.textContent = num;

    if (isPrime(num)) {
        item.classList.add('prime');
    } else if (num % 2 === 0) {
        item.classList.add('even');
    } else {
        item.classList.add('odd');
    }

    return item;
}

// Main function to generate numbers and append them to the container
function generateNumbers() {
    const container = document.getElementById('numberContainer');
    for (let i = 100; i <= 1000; i++) {
        const numberItem = createNumberItem(i);
        container.appendChild(numberItem);
    }
}

// Call the function to start generating numbers
generateNumbers();
