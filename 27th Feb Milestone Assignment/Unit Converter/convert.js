function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  const temperatureCelsius = 25;
  const temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);
  console.log(`Temperature in Celsius: ${temperatureCelsius}`);
  console.log(`Temperature in Fahrenheit: ${temperatureFahrenheit}`);