// Generating numbers and marking evens, odds and prime numbers with three different colors. 

// See the image below.

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_number_generator_day_3.1.gif
// script.js

document.getElementById('generate').addEventListener('click', function () {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const numberContainer = document.getElementById('number-container');

    // Clear previous results
    numberContainer.innerHTML = '';

    for (let i = start; i <= end; i++) {
        const div = document.createElement('div');
        div.classList.add('number');
        div.textContent = i;

        if (isPrime(i)) {
            div.classList.add('prime');
        } else if (i % 2 === 0) {
            div.classList.add('even');
        } else {
            div.classList.add('odd');
        }

        numberContainer.appendChild(div);
    }
});

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
