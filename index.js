// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const colors = ['rgb(222, 12, 12)','rgb(12, 222, 33)','rgb(12,66,222)'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor='';
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const key=document.getElementById('textInput');
  const preview=document.getElementById('keyPressDisplay');
  preview.textContent="Key pressed: "+event.key;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const text=document.getElementById('textInput');
  const preview=document.getElementById('textInputDisplay');
  preview.textContent="You typed: "+text.value;
}

// Attach Event Listeners

function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}