const feedback = document.querySelector(".PasswordResult");
let LoginArray = [];


function check_form() {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const username2 = document.getElementById("username2").value;
  const feedback = document.querySelector(".feedback");
  const letter = /[a-z]/;
  const upper = /[A-Z]/;
  const number = /[0-9]/;
  const specialChars = /\W|_/g;

  if (
    username.length < 13 ||
    username != username2 ||
    !letter.test(username) ||
    !number.test(username) ||
    !upper.test(username) ||
    !specialChars.test(username)
  ) {
    if (username.length < 13) {
      feedback.textContent = "Make sure password is atleast 13 letters";
      if (!feedback.classList.contains("error")) {
        feedback.classList.add("class", "error");
      }
      return false;
    }
    if (username != username2) {
      feedback.textContent = "Make sure both passwords match";
      if (!feedback.classList.contains("error")) {
        feedback.classList.add("class", "error");
      }
      return false;
    }
    if (!letter.test(username)) {
      feedback.textContent =
        "Make sure password includes atleast one lowercase letter";
      if (!feedback.classList.contains("error")) {
        feedback.classList.add("class", "error");
      }
      return false;
    }
    if (!number.test(username)) {
      feedback.textContent = "Make sure password includes atleast one number";
      if (!feedback.classList.contains("error")) {
        feedback.classList.add("class", "error");
      }
      return false;
    }
    if (!upper.test(username)) {
      feedback.textContent =
        "Make sure password includes atleast one uppercase letter";
      if (!feedback.classList.contains("error")) {
        feedback.classList.add("class", "error");
      }
      return false;
    }
    if (!specialChars.test(username)) {
      feedback.textContent =
        "Make sure password includes atleast one special character";
      if (!feedback.classList.contains("error")) {
        feedback.classList.add("class", "error");
      }
      return false;
    }
  } else {
    feedback.textContent = "That password is valid, redirecting you to home page. . .";
    if (!feedback.classList.contains("success")) {
      feedback.classList.add("class", "success");
      LoginArray.push(username);
    }
    setTimeout(function(){
      document.location.href = "index.html";
    }, 3000);
  }

  return true;
}

function Login (){
  console.log(LoginArray)
  event.preventDefault();
  if(LoginArray === 13){
    feedback.textContent = "You are logged in!"
  }else{
    feedback.textContet = "Invalid account"
  }
};
