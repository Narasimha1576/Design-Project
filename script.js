// Function to generate a random number within a given range
function getRandomValue(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// Function to update the values on the page
function updateValues() {
    document.getElementById('waterWastage').textContent = `${getRandomValue(0, 50)} L`;
    document.getElementById('humidityLevel').textContent = `${getRandomValue(30, 90)} %`;
    document.getElementById('temperature').textContent = `${getRandomValue(10, 35)} °C`;
    document.getElementById('pumpStatus').textContent = Math.random() > 0.5 ? 'ON' : 'OFF';
    document.getElementById('pumpPressure').textContent = `${getRandomValue(1, 5)} bar`;
    
    const waterLevel = document.getElementById('waterLevel');
    const waterHeight = getRandomValue(0, 100);
    waterLevel.style.height = `${waterHeight}%`;
    waterLevel.textContent = `${waterHeight}%`;
}

// Update values every 2 seconds
setInterval(updateValues, 2000);

// Initial update
updateValues();
