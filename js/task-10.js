const boxCreator = {
  boxInitialSize: 30,
  boxSizeIncrement: 10,
  elements: {},
  boxes: [],
};

boxCreator.elements = getControlsElements();
initControlsElements(boxCreator.elements);

/**
 * * Populate object with controls element.
 * @returns {object.<Element>} Object of controls elements.
 * @returns {Element} object.input Number input element for setting number of boxes to create.
 * @returns {Element} object.createBtn Button element to create boxes collection.
 * @returns {Element} object.destroyBtn Button element to clear boxes collection.
 * @returns {Element} object.output Element to contain boxes collection.
 */
function getControlsElements() {
  const input = document.querySelector("#controls").firstElementChild;
  const createBtn = input.nextElementSibling;
  const destroyBtn = createBtn.nextElementSibling;
  const output = document.querySelector("#boxes");
  return { input, createBtn, destroyBtn, output };
}

/**
 * * Initialize control elements with default values.
 * @param {object.<Element>} els Object of controls elements.
 * @param {Element} els.input Number input element for setting number of boxes to create.
 */
function initControlsElements({ input, createBtn, destroyBtn }) {
  input.value = 1;
  input.placeholder = "Valid numbers 1 ... 100";
  input.addEventListener("focus", handleInputFocus);
  input.addEventListener("blur", handleInputBlur);
  createBtn.addEventListener("click", handleCreate);
  destroyBtn.addEventListener("click", destroyBoxes);
}

/**
 * * Handles focus event on input.
 * Adds key eventListener to the input.
 * @param {Event} event Occurred event
 */
function handleInputFocus(event) {
  document.addEventListener("keyup", handleEnterKey);
}

/**
 * * Handles blur event on input.
 * Removes key eventListener from the input.
 * @param {Event} event Occurred event
 */
function handleInputBlur(event) {
  document.removeEventListener("keyup", handleEnterKey);
}

/**
 * * Handles enter key event.
 * When 'Enter' key is pressed invokes boxes creation.
 * @param {Event} event Occurred event
 */
function handleEnterKey(event) {
  if (event.key === "Enter") {
    handleCreate();
  }
}

/**
 * * Handles a collection of boxes creation based on input value
 * * and adding the elements to the output element.
 * Gets value from input,
 * validates input value,
 * invokes boxes creation with their render,
 * resets input to default initial value.
 */
function handleCreate() {
  const inputValue = boxCreator.elements.input.value;

  if (!inputValue || inputValue <= 0) {
    boxCreator.elements.input.value = "";
    return;
  }

  createBoxes(inputValue);

  boxCreator.elements.input.value = 1;
}

/**
 * * Handles clearing of the boxes collection and invokes rerender.
 */
function destroyBoxes() {
  boxCreator.boxes = [];
  renderBoxes();
}

/**
 * * Replaces existing boxes collection with a new one and invokes rerender.
 * The size of each box is dynamic, starting from width and height equals to boxInitialSize.
 * Each next box gain boxSizeIncrement in width and height.
 * Each box obtains random background-color.
 * @param {number} amount Number of boxes to create.
 */
function createBoxes(amount) {
  boxCreator.boxes = [];

  const initialSize = boxCreator.boxInitialSize;
  const sizeIncrement = boxCreator.boxSizeIncrement;
  for (
    let size = initialSize, boxId = 1;
    size < initialSize + sizeIncrement * amount;
    size += sizeIncrement, boxId += 1
  ) {
    const box = document.createElement("div");
    box.textContent = `#${boxId}`;
    box.classList.add("box");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxCreator.boxes.push(box);
  }

  renderBoxes();
}

/**
 * *Renders boxes from boxes collection of boxes in boxCreator.
 * Before adding new boxes to output, clears previously rendered ones.
 */
function renderBoxes() {
  if (boxCreator.elements.output.innerHTML) {
    boxCreator.elements.output.innerHTML = "";
  }
  const markup = boxCreator.boxes.map(element => element.outerHTML).join("");
  boxCreator.elements.output.insertAdjacentHTML("afterbegin", markup);
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
