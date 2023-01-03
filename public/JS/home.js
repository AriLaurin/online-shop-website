const buttons = document.querySelectorAll("[data-carousel-button]")

// addEventListener("load",() => { // "load" is safe but "DOMContentLoaded" starts earlier
//     var index = 0;
//     const slides = document.querySelectorAll(".slides");
//     const classHide = "slides-hidden", count = slides.length;
//     nextSlide();
//     function nextSlide() {
//         slides[(index ++) % count].classList.add(classHide);
//         slides[index % count].classList.remove(classHide);
//         setTimeout(nextSlide, 3000);
//     }
// });


buttons.forEach( button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
});

// Get the button:
let mybutton = document.getElementById("myBtn");
let mybutton2 = document.getElementById("myBtn2");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollFunction2() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton2.style.display = "block";
  } else {
    mybutton2.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let popbtn = document.getElementById("popbtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
popbtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function ProductPage(){
  document.location.href = "./HTML/products.html";
};



// addEventListener("click", e => {
//   if (e.target.classList.contains("ProductTitle")) {
//     console.log(e.target)
//   }
// });

const categoryTitle = document.querySelectorAll(".ProductTitle");

// console.log(categoryTitle)
let chosenElement = '';
for(let i of categoryTitle) {

  i.addEventListener("click", () => {

    // console.log("this is clicked", i.textContent.toLowerCase());
    chosenElement = i.textContent.toLowerCase();
  })

function getProduct(){
  console.log("wee")
  // const categoryTitle = document.querySelector("#ProductTitle").firstChild.data.toLowerCase();

  // console.log(i.textContent);
  

  db.collection(chosenElement).get().then((snapshot) => {
    let docID = '';
    // console.log(snapshot.docs[0].data())
    snapshot.docs.forEach(doc => {
      // console.log(doc.id);
      // console.log(chosenElement)
      console.log(doc.data().name);
      console.log(doc.id);
      // if(doc.data().name === chosenElement){
      //   // console.log(doc.id);
      //   console.log(`this is ${chosenElement}`);
      //    docID = doc.id;
    // }



});
// console.log(docID);
// banan(docID);

  })}};

  function banan (docID) {
    console.log(docID)

  }

  addEventListener("click", e => {
    if (e.target.classList.contains("ButtonCart")) {
      itemID = (e.target.parentElement.parentElement.children[4].textContent);
      e.target.textContent = "ADDED";
      e.target.disabled = true;
      
      searchCategories.forEach(cat => {
        db.collection(cat).doc(itemID).get().then((snapshot) => {
          productBasket(snapshot.data(), itemID);
          }).catch(err => {
            return;
        })
      });
  
      // db.collection("hats").get().then((snapshot) => {
      //   snapshot.docs.forEach(doc => {
      //     addProduct(doc.data(),doc.id)
      //   });
      // });
  
  
    }
  });

const searchBox = document.getElementById("input-search");

console.log(searchBox);

function itemSearch() {
  if (document.getElementById("output") == null) {
  const searchTxt = searchBox.value
  localStorage.setItem("redirectSearch", searchTxt);
  document.location.href = "/HTML/products.html";
  }
  else {
      return
  }

}

searchBox.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
      itemSearch();
  }
});


