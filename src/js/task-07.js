const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
console.dir(input);

input.addEventListener("input", () => {
    console.log(input.value);
    spanText.style.fontSize = `${input.value}px`
});