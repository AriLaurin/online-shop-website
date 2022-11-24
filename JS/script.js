const feedback = document.querySelector(".PasswordResult");
let userStatus = localStorage.getItem("status");
let navbarButton1 = document.querySelector(".interface-buttons1");
let navbarButton2 = document.querySelector(".interface-buttons2");
const form = document.querySelector("form");
let isLoggedIn = false;

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
  const notAllowed = /.*?script.*\/?>/ig;
  const databaseNO = /.*?database.*\/?/g;
  const databaseNO2 = /.*?table.*\/?/g;

  if (
    password.length < 13 ||
    password != password2 ||
    !letter.test(password) ||
    !number.test(password) ||
    !upper.test(password) ||
    !specialChars.test(password)||
    notAllowed.test(password) ||
    databaseNO.test(password) ||
    databaseNO2.test(password)
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
    
        // const now = new Date();
    
        const accountInfo = { //object
            username: AccountName,
            password: password, //gets the form that we are grabbing info from, which will be put in the recipe document and grab its value
            // created_at: firebase.firestore.Timestamp.fromDate(now) // custom firebase timestamp object
        };
    
        db.collection("nybruker").add(accountInfo).then(() => { //async method which will execute the recipe object
            console.log("account added"); //dev side stuff
        }).catch(err => {
            console.log(err);
        })
    
    if (!feedback.classList.contains("success")) {
      feedback.classList.add("class", "success");
      // localStorage.setItem("password", password);
      // localStorage.setItem("username", AccountName);
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

  db.collection("nybruker").get().then((snapshot) => {
    let i = 0
    snapshot.docs.forEach(doc => {
      let DBCounter = snapshot.docs[i].data().username;
      ++i

    });
  }).catch((err) => {
    console.log(err);
  })

  //reference the database    // These methods are async, so we can use .then to fire a function when the async is finished
db.collection("nybruker").get().then((snapshot) => {//gets the specific collection
  //  gets all the data ^        ^ how all the data looks like at the moment
  //console.log(snapshot.docs[0].data());

  //  testfunction() = snapshot.docs.forEach(doc =>{
  //   let i = 1;
  //   console.log(snapshot.docs[i].data().password);

  // })
  

//function


snapshot.docs.forEach(doc => { //gets all the docs
  let DataUsername = doc.data().username;
  let DataPassword = doc.data().password;
  console.log(DataPassword, LoginPass == DataPassword, LoginPass, DataPassword);
  console.log(DataUsername, LoginUsername == DataUsername);
  if (
    LoginPass === DataPassword &&
    LoginUsername === DataUsername
    //LoginPass == localStorage.getItem("password") &&
    //LoginUsername == localStorage.getItem("username")
  ) {
    // localStorage.setItem('status', true);

    isLoggedIn = true;

    feedback.textContent =
      "You are logged in! Redirecting you to home page. . .";


    setTimeout(function () {
      document.location.href = "../index.html";
    }, 3000);
    // }else if(LoginPass != localStorage.getItem("password")){
    //   feedback.textContent = "Invalid account"
    
  }
  if(!isLoggedIn) {
    feedback.textContent = "Invalid account";
  }
  // if(LoginPass !== DataPassword &&
  //   LoginUsername !== DataUsername) {
  //   feedback.textContent = "Invalid account";
  // }
});



// when we have the data
}).catch((err) => {
 console.log(err)
});
}
