const convertBtn = document.getElementById("convert-btn");
const resetBtn = document.getElementById("reset-btn");
const degreeInput = document.getElementById("degree");
const tempType = document.getElementById("temp-type");
const celsiusOutput = document.getElementById("celsius");

convertBtn.addEventListener("click", () => {
    const degree = parseFloat(degreeInput.value);
    const type = tempType.value;

    if (!isNaN(degree)) {
        let celsius = 0;
        if (type === "fahrenheit") {
            celsius = (degree - 32) * (5 / 9);
        } else if (type === "kelvin") {
            celsius = degree - 273.15;
        }
        celsiusOutput.textContent = celsius.toFixed(2);
    } else {
        alert("Please enter a valid temperature!");
    }
});

resetBtn.addEventListener("click", () => {
    degreeInput.value = "";
    tempType.value = "fahrenheit";
    celsiusOutput.textContent = "0";
});
