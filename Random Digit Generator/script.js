// Function to generate a random number between min and max values
function generateRandomNumber() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    const resultDiv = document.getElementById('result');

    // Validate the input values
    if (isNaN(minValue) || isNaN(maxValue)) {
        resultDiv.textContent = "Please enter valid numbers.";
        return;
    }

    if (minValue > maxValue) {
        resultDiv.textContent = "Minimum value should be less than or equal to the maximum value.";
        return;
    }

    // Generate the random number
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    // Display the result
    resultDiv.textContent = `Random Number: ${randomNumber}`;
}
