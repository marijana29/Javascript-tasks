const redSlider = document.querySelector(".red");
const greenSlider = document.querySelector(".green");
const blueSlider = document.querySelector(".blue");
const colorDisplay = document.getElementById("color-value");

function updateColor() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;

  const color = `rgb(${redValue},${greenValue},${blueValue})`;
  colorDisplay.textContent = color;
  document.body.style.backgroundColor = color;
}

updateColor();

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);
