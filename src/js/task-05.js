const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

console.log(input, span);

input.addEventListener('input', () => {
    console.log(input.value);
    
    if (!input.value) {
        span.textContent = 'anonymous'
    } else {
        span.textContent = input.value;
    }
});