function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('unit').value;
    const toUnit = document.getElementById('convert-to').value;
    const resultElement = document.getElementById('result');
  
    if (isNaN(temperature)) {
      resultElement.innerHTML = '❌ Please enter a valid number!';
      resultElement.style.color = 'red';
      return;
    }
  
    let convertedTemp;
  
    if (fromUnit === toUnit) {
      convertedTemp = temperature;
    } else if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
      convertedTemp = (temperature * 9/5) + 32;
    } else if (fromUnit === 'Celsius' && toUnit === 'Kelvin') {
      convertedTemp = temperature + 273.15;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
      convertedTemp = (temperature - 32) * 5/9;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin') {
      convertedTemp = ((temperature - 32) * 5/9) + 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Celsius') {
      convertedTemp = temperature - 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit') {
      convertedTemp = ((temperature - 273.15) * 9/5) + 32;
    }
  
    resultElement.style.color = '#333';
    resultElement.innerHTML = `✅ Converted Temperature: <strong>${convertedTemp.toFixed(2)}° ${toUnit}</strong>`;
  }
  