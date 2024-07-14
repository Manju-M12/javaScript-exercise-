// DOM: Mini Project

// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// 1. The year color is changing every 1 second
// 2. The date and time background color is changing every on seconds
// 3. Completed challenge has background green
// 4. Ongoing challenge has background yellow
// 5. Coming challenges have background red




/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript for Everyone: DOM</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="wrapper">
        <h1>JavaScript Challenges in 2024</h1>
        <h2 id="year">2024</h2>
        <div id="date-time"></div>
        <ul>
            <li class="completed">30DaysOfPython Challenge Done</li>
            <li class="ongoing">30DaysOfJavaScript Challenge Ongoing</li>
            <li class="coming">30DaysOfReact Challenge Coming</li>
            <li class="coming">30DaysOfFullStack Challenge Coming</li>
            <li class="coming">30DaysOfDataAnalysis Challenge Coming</li>
            <li class="coming">30DaysOfReactNative Challenge Coming</li>
            <li class="coming">30DaysOfMachineLearning Challenge Coming</li>
        </ul>
    </div>
    <script src="script.js"></script>
</body>
</html>*/
// script.js

// Function to change the year color every second
function changeYearColor() {
    const yearElement = document.getElementById('year');
    let isRed = false;
    setInterval(() => {
        yearElement.style.color = isRed ? 'blue' : 'red';
        isRed = !isRed;
    }, 1000);
}

// Function to change the background color of the date and time every second
function changeDateTimeBackground() {
    const dateTimeElement = document.getElementById('date-time');
    const colors = ['#4CAF50', '#FFC107', '#FF5722', '#3F51B5', '#009688'];
    let index = 0;
    setInterval(() => {
        dateTimeElement.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);
}

// Function to update the date and time every second
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    setInterval(() => {
        const now = new Date();
        dateTimeElement.textContent = now.toLocaleString();
    }, 1000);
}

// Call functions
changeYearColor();
changeDateTimeBackground();
updateDateTime();
