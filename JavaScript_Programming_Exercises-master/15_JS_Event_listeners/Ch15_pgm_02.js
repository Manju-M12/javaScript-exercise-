// script.js
// Generating the keyboard code code using even listener. 

// The image below.

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_keycode_day_3.2.gif

// script.js

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const keyCode = event.keyCode;

    document.querySelector('.key').textContent = `Key: ${key}`;
    document.querySelector('.code').textContent = `KeyCode: ${keyCode}`;
});