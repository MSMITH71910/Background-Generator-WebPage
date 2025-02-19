// Select the necessary elements
var cssOutput = document.querySelector("h3");
var color1 = document.querySelector("input[name='color1']");
var color2 = document.querySelector("input[name='color2']");
var body = document.getElementById("gradient");

// Function to set the gradient background
function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  cssOutput.textContent = body.style.background + ";";
}

// Add event listeners to the color input elements
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Initialize the gradient display
setGradient();

// Add animation class to body
body.classList.add('animated');
