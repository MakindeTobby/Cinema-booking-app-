const signUpform = document.querySelector(".form-d1");
const loginform = document.querySelector(".form-d2");
const forgotform = document.querySelector(".form-d3");

function forgotP() {
    forgotform.classList.remove("hidden");
    loginform.classList.add("hidden");
}

const passInput = document.getElementById('pass-inpt');
const toggleEye = document.getElementById('toggle-eye')
const toggleImg = document.getElementById('toggle-img')

const userEmail = document.getElementById("user-email");
const userName = document.getElementById("user-username");
// const userPassword = document.getElementById("user-password");
const userConfirm = document.getElementById("user-confirm");
const userNumber = document.getElementById("user-number");
const emailError = document.getElementById("email-error");
const nameError = document.getElementById("name-error");
const passError = document.getElementById("pass-error");
const confirmError = document.getElementById("confirm-error");
const loginEmail = document.getElementById("login-email");
const loginPass = document.getElementById("login-password");

let pattern = /^[^ ]+@[^ ]+\.[com]{3,3}$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
let usernameRegex = /^[A-Za-z0-9]{5,10}$/

passError.hidden = true;
passInput.addEventListener("input", () => {
    if (passInput.value.match(passwordRegex)) {
        passError.hidden = true;
    }
    else {
        passError.innerText = "Password must consist Minimum 6 characters, at least one uppercase letter, one lowercase letter and one number:"
        passError.style.color = "#ff0000"
        toggleEye.hidden = false
        passError.hidden = false;
    }
    if (passInput.value === "") {
        toggleEye.hidden = true
        passError.hidden = true;
    }
})
toggleEye.addEventListener("click", (event) => {
    event.preventDefault()
    if (passInput.type == "password") {
        passInput.type = "text"
        toggleImg.src = "../Media/openEye.png"
    } else {
        passInput.type = "password"
        toggleImg.src = "../Media/closeEye.png"
    }
})

toggleEye.hidden = true;

userEmail.addEventListener("input", () => {

    if (userEmail.value.match(pattern)) {
        emailError.innerText = "✔"
        emailError.style.color = "#00ff00"
    }
    else {
        emailError.innerText = "❌"
        emailError.style.color = "#ff0000"
    }
    if (userEmail.value === "") {
        emailError.innerText = ""
    }
})

userName.addEventListener("input", () => {

    if (userName.value.match(usernameRegex)) {
        nameError.innerText = "✔"
        nameError.style.color = "#00ff00"
    }
    else {
        nameError.innerText = "❌"
        nameError.style.color = "#ff0000"
    }
    if (userName.value === "") {
        nameError.innerText = ""
    }
})
userConfirm.addEventListener("input", () => {

    if (passInput.value !== userConfirm.value) {
        confirmError.innerText = "❌"
        confirmError.style.color = "#ff0000"
    }
    else {
        confirmError.innerText = "✔"
        confirmError.style.color = "#00ff00"

    }
    if (userConfirm.value === "") {
        confirmError.innerText = ""
    }
})



const userInfo = [];

function sendInfo(event) {
    event.preventDefault();
    if (userEmail.value === "" || userName.value === "" || passInput.value === "" || userNumber.value === "") {
        swal("Ooops!", "Pls complete the form", "info");
    }
    // else if (passInput.value !== userConfirm.value) {
    //     swal("Error", "Password not match", "error");
    // }
    else {
        userInfo.push(
            {
                user_email: userEmail.value,
                user_username: userName.value,
                user_password: passInput.value,
                user_number: userNumber.value,
            }
        )
        // swal("Thank You", "Details Received", "success")
        clearInput()
        console.log(userInfo);
        localStorage.setItem("user_info", JSON.stringify(userInfo))
        location.replace("ticket.html")
    }

}


function clearInput() {
    userEmail.value = ""
    userName.value = ""
    passInput.value = ""
    userConfirm.value = ""
    userNumber.value = ""
}

let arr = []
let user = JSON.parse(localStorage.getItem("user_info"))

if (user != null) {
    arr = user
}


function loginUser() {
    if (loginEmail.value === "" || loginPass.value === "") {
        swal("Ooops!", "Pls complete the form", "info");
    }
    else {
        location.replace("ticket.html")
    }
}