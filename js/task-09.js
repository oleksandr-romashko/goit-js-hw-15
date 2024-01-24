const changeBgColorBtn = document.querySelector("button.change-color");
const colorCodeOutput = document.querySelector("span.color");

changeBgColorBtn.addEventListener("click", handleBgColorChange);

/**
 * * Handles page body background color change
 * * and assingning hex color code to span text.
 * @param {Event} event - the event that has occurred.
 */
function handleBgColorChange() {
  const newBgColor = getRandomHexColor();
  colorCodeOutput.textContent = newBgColor;
  document.body.style.backgroundColor = `${newBgColor}`;
}

/**
 * * Generates pseudo random hex color code.
 * @returns {string} hex color code, e.g. #a7ae44
 */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
