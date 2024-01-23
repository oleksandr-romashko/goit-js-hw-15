const counterEl = document.querySelector("#value");
const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");

let counterValue = 0;
counterEl.textContent = counterValue;

const handledecreaseValue = () => {
  counterEl.textContent = --counterValue;
};

const handleIncreaseValue = () => {
  counterEl.textContent = ++counterValue;
};

decrementBtn.addEventListener("click", handledecreaseValue);

incrementBtn.addEventListener("click", handleIncreaseValue);
