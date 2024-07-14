document.addEventListener('DOMContentLoaded', () => {
    const planetSelect = document.getElementById('planet');
    const weightInput = document.getElementById('weight');
    const calculateButton = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');
    const planetImage = document.getElementById('planetImage');

    // Planet gravity data
    const gravity = {
        Mercury: 0.377,
        Venus: 0.903,
        Earth: 1,
        Mars: 0.38,
        Jupiter: 2.528,
        Saturn: 1.065,
        Uranus: 0.886,
        Neptune: 1.14,
        Pluto: 0.06
    };

    // Update the planet image when the dropdown selection changes
    planetSelect.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        const planetImageSrc = `images/${selectedOption.getAttribute('data-image')}`;
        planetImage.src = planetImageSrc;
        planetImage.alt = selectedOption.textContent;
    });

    // Calculate weight on the selected planet
    calculateButton.addEventListener('click', function() {
        const planet = planetSelect.value;
        const weight = parseFloat(weightInput.value);

        if (!weight || isNaN(weight)) {
            resultDiv.innerHTML = 'Please enter a valid weight.';
            return;
        }

        if (gravity[planet]) {
            const weightOnPlanet = weight * gravity[planet];
            resultDiv.innerHTML = `Your weight on ${planet} would be ${weightOnPlanet.toFixed(2)} kg.`;
        } else {
            resultDiv.innerHTML = 'Please select a valid planet.';
        }
    });

    // Set default image on page load
    planetSelect.dispatchEvent(new Event('change'));
});
