function signout(){
    localStorage.setItem("status", false);
  }
  
  
  
  signoutBTN.addEventListener("click", event => {
  
  event.target.parentElement.parentElement.classList.add("loggedIn");
  navbarButton1.classList.remove("loggedIn");
  
  })