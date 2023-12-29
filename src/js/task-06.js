const input = document.querySelector("#validation-input");
console.log(input);
input.addEventListener('blur', () => {
    console.log(+input.value, input.dataset);
    if (+input.dataset.length > +input.value.length) {
        input.classList.add("invalid");
    } else {
        input.classList.add("valid");
    }
});

input.addEventListener('focus', () => {
    input.classList.remove('valid', 'invalid');
});