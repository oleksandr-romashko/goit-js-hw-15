const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.value = "";
output.textContent = "Anonymous";

textInput.addEventListener("input", handleInputValueChange);

function handleInputValueChange(event) {
  if (!event.currentTarget.value.trim()) {
    output.textContent = "Anonymous";
    return;
  }
  output.textContent = event.currentTarget.value;
}
