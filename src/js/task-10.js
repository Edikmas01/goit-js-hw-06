function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

    function createBoxes(amount) {
      const boxesContainer = document.querySelector("#boxes");
      console.log(boxesContainer);
      let size = 30;

      for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;

        boxesContainer.appendChild(box);
        size += 10;
      }
    }

    function destroyBoxes() {
      const boxesContainer = document.querySelector("#boxes");
      boxesContainer.innerHTML = "";
    }

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

createButton.addEventListener("click", () => {
  const input = document.querySelector('input[type="number"]');
  const amount = input.value;
  createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);