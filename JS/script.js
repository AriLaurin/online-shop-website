const feedback = document.querySelector(".PasswordResult");
let userStatus = localStorage.getItem("status");
let navbarButton1 = document.getElementsByClassName("interface-buttons1");
let navbarButton2 = document.getElementsByClassName("interface-buttons2");
let signoutBTN = document.querySelector(".SObtn");

function check_form() {
  event.preventDefault();
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;
  const feedback = document.querySelector(".feedback");
  const AccountName = document.getElementById("createName").value;
  const letter = /[a-z]/;
  const upper = /[A-Z]/;
  const number = /[0-9]/;
  const specialChars = /\W|_/g;

  if (
    password.length < 13 ||
    password != password2 ||
    !letter.test(password) ||
    !number.test(password) ||
    !upper.test(password) ||
    !specialChars.test(password)
  ) {
    if (password.length < 13) {
      feedback.textContent = "Make sure password is atleast 13 letters";
      if (!feedback.classList.contains("error")) {
        feedback.classList.add("class", "error");
      }
      return false;
    }
    if (password != password2) {
      feedback.textContent = "Make sure both passwords match";
      if (!feedback.classList.contains("error")) {
        feedback.classList.add("class", "error");
      }
      return false;
    }
    if (!letter.test(password)) {
      feedback.textContent =
        "Make sure password includes atleast one lowercase letter";
      if (!feedback.classList.contains("error")) {
        feedback.classList.add("class", "error");
      }
      return false;
    }
    if (!number.test(password)) {
      feedback.textContent = "Make sure password includes atleast one number";
      if (!feedback.classList.contains("error")) {
        feedback.classList.add("class", "error");
      }
      return false;
    }
    if (!upper.test(password)) {
      feedback.textContent =
        "Make sure password includes atleast one uppercase letter";
      if (!feedback.classList.contains("error")) {
        feedback.classList.add("class", "error");
      }
      return false;
    }
    if (!specialChars.test(password)) {
      feedback.textContent =
        "Make sure password includes atleast one special character";
      if (!feedback.classList.contains("error")) {
        feedback.classList.add("class", "error");
      }
      return false;
    }
  } else {
    feedback.textContent =
      "That password is valid, redirecting you to login page. . .";
    if (!feedback.classList.contains("success")) {
      feedback.classList.add("class", "success");
      localStorage.setItem("password", password);
      localStorage.setItem("username", AccountName);
    }
    setTimeout(function () {
      document.location.href = "login.html";
    }, 3000);
  }

  return true;
}

function HidePass() {
  let x = document.getElementById("passwordActual");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function Login() {
  const LoginPass = document.getElementById("passwordActual").value;
  const LoginUsername = document.getElementById("usernameActual").value;
  event.preventDefault();
  if (
    LoginPass == localStorage.getItem("password") &&
    LoginUsername == localStorage.getItem("username")
  ) {
    localStorage.setItem('status', true);

    feedback.textContent =
      "You are logged in! Redirecting you to home page. . .";

    setTimeout(function () {
      document.location.href = "../index.html";
    }, 3000);
    // }else if(LoginPass != localStorage.getItem("password")){
    //   feedback.textContent = "Invalid account"
  } else {
    feedback.textContent = "Invalid account";
  }
}

//if(userStatus = sessionStorage.getItem("status", true)){
 // navbarButton1[0].classList.add("loggedIn")
//} else {
 // navbarButton1[0].classList.remove("loggedIn")
//}

function signout(){
  localStorage.setItem("status", false);
}

//signoutBTN.addEventListener("click", event => {

 // event.target.parentElement.classList.add("loggedIn");

//})

console.log("user status: ",userStatus);

console.log(navbarButton1.classList)

