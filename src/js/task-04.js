let counterValue = 0;

const decrementButton = document.querySelector(
  '[data-action="decrement"]'
);

const incrementButton = document.querySelector(
  '[data-action="increment"]'
);

const valueSpan = document.querySelector("#value");

function update() {
    valueSpan.textContent = counterValue;
};

decrementButton.addEventListener("click", () => {
    counterValue--;
    update();
});

incrementButton.addEventListener("click", () => {
    counterValue++;
    update();
});