let initialPassword = document.querySelector("#pwd");
let messagePlacement = document.querySelector("#pwd::after")
let confirmationPassword = document.querySelector("#pwd-confirm");
let hook = document.querySelector("span")
const form = document.querySelector("form");


function checkPasswordMatch() {
    console.log(confirmationPassword.value)
    console.log(initialPassword.value)
    if (confirmationPassword.value === initialPassword.value) {
        return
    } else {
        return "password fail"
    }
}

function showVerificationMessage() {
    initialPassword.setCustomValidity("Passwords Do Not Match");
    confirmationPassword.setCustomValidity("Passwords Do Not Match");
    hook.classList.add('invalid-password')
}

document
    .querySelector("button")
    .addEventListener("click", function (event) {
        if (checkPasswordMatch() === "password fail") {
            event.preventDefault();
            form.reportValidity();
            showVerificationMessage();
        }
    })



document
    .querySelector("button")
    .addEventListener("click", function (event) {
        event.preventDefault();
        let checkStatus = form.checkValidity();
        console.log(checkStatus);
        form.reportValidity();
    })