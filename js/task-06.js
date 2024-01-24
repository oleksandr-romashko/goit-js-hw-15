const inputTextEl = document.querySelector("#validation-input");
const validLength = Number(inputTextEl.dataset.length);

inputTextEl.addEventListener("blur", hadleInputValidationCheck);

/**
 * * Handles input text field validation check.
 * @param {Event} event - the event that has occurred.
 * If input length the save as data-length - assigns 'valid' class to the input.
 * If input length is not the same as data-length - assigns 'valid' class to the input.
 * If input is empty - removes both 'valid' and 'invalid' classes from the input (default).
 */
function hadleInputValidationCheck(event) {
  const element = event.currentTarget;
  const textLength = element.value.length;

  if (textLength === 0) {
    inputTextEl.classList.remove("invalid");
    inputTextEl.classList.remove("valid");
    return;
  }

  if (textLength !== validLength) {
    inputTextEl.classList.add("invalid");
    inputTextEl.classList.remove("valid");
    console.log("invalid");
    return;
  }

  console.log("valid");
  inputTextEl.classList.add("valid");
  inputTextEl.classList.remove("invalid");
}
