const controlEl = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

// default initial values
const minValue = Number(controlEl.min);
const maxValue = Number(controlEl.max);
const initialValue = minValue + (maxValue - minValue) / 2;
controlEl.value = initialValue;
output.style.fontSize = `${initialValue}px`;

controlEl.addEventListener("input", handleFontSize);

/**
 * * Handles text size based on range input value.
 * @param {Event} event - the event that has occurred.
 * The bigger range input value the bigger text font size.
 */
function handleFontSize(event) {
  const size = Number(event.currentTarget.value);
  output.style.fontSize = `${size}px`;
}
