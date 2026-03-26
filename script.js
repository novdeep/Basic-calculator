let display = document.getElementById('display');
let currentInput = '0';
let shouldResetDisplay = false;

function updateDisplay() {
  display.value = currentInput;
}

function appendToDisplay(value) {
  if (shouldResetDisplay) {
    currentInput = '0';
    shouldResetDisplay = false;
  }
  if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}

function toggleSign() {
  if (currentInput !== '0') {
    currentInput = currentInput.startsWith('-') 
      ? currentInput.slice(1) 
      : '-' + currentInput;
    updateDisplay();
  }
}

function percent() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateDisplay();
}

function calculate() {
  try {
    let expression = currentInput
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-');
    
    currentInput = eval(expression).toString();
    shouldResetDisplay = true;
    updateDisplay();
  } catch (e) {
    currentInput = 'Error';
    updateDisplay();
    shouldResetDisplay = true;
  }
}

// Initialize
updateDisplay();
