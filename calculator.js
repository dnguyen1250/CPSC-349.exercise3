// display starts blank
let display = ''

// update the display, when clearing or pressing buttons
function updateDisplay() {
  document.getElementById('textbox').value = display;
}

// pressing buttons will append/add to textbox
function appendCharacter(char) {
  display += char;
  updateDisplay();
}

// clear screen
function clearBox() {
  display = '';
  updateDisplay();
}

// calculate when '=' is pressed
function calculate(){
  const result = eval(display);
  display = result.toString();
  updateDisplay();
}

