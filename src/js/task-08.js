const form = document.querySelector(".login-form");
console.dir(form);
const { email, password } = form.elements;
console.dir(email);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!email.value || !password.value) {
        alert("все поля должны быть заполнены.");
    } else {
    const user = {
        email: email.value,
        password: password.value,
    };
        console.log(user);
        reset()
    }
});

const reset = () => {
        email.value = '',
        password.value = ''
}