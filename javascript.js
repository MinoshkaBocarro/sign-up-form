const initialPassword = document.querySelector("#pwd");
const confirmationPassword = document.querySelector("#pwd-confirm");
const hook = document.querySelector("span");
const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");


function checkPasswordMatch() {
    console.log(confirmationPassword.value)
    console.log(initialPassword.value)
    if (confirmationPassword.value === initialPassword.value) {
        return "password match"
    } else {
        return "password fail"
    }
}

function showVerificationMessage() {
    initialPassword.setCustomValidity("Passwords Do Not Match");
    confirmationPassword.setCustomValidity("Passwords Do Not Match");
    hook.classList.add('invalid-password');
}

function hideVerificationMessage() {
    initialPassword.setCustomValidity("");
    confirmationPassword.setCustomValidity("");
    hook.classList.remove('invalid-password');
}

console.log(form.elements)

document
    .querySelector("button")
    .addEventListener("click", function (event) {
        let emptyFields
        if (checkPasswordMatch() === "password match") {
            hideVerificationMessage();
        }
        for (let i = 0; i < form.elements.length; i++) {
            console.log(form.elements[i].tagName)
            if (form.elements[i].tagName === "INPUT" && 
                form.elements[i].getAttribute("type") !== "tel" ) {
                console.log(form.elements[i].value)
                if (form.elements[i].value === "") {
                    form.elements[i].setAttribute("required", "")
                    emptyFields = true;
                }
            }
        }
        if (checkPasswordMatch() === "password fail") {
            showVerificationMessage();
            event.preventDefault();
        } else if (emptyFields === true) {
            event.preventDefault();
            form.reportValidity();
        } /*a check if everything is valid, something to come back too later down the line, beyond my scope atm*/
        else {
            form.reportValidity();
            alert("Form Submitted");
            event.preventDefault();
        }
    })