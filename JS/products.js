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
let popbtn = "";
 popbtn = document.getElementById("popbtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
if(popbtn !== null && span !== null){
  popbtn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function ProductPage(product){
  document.location.href = "./HTML/products.html";
};

function productInfo(productID, productType){
  document.location.href = "../HTML/productPage.html"
  console.log(productID);
  console.log(productType);
  localStorage.setItem('productType', productType);
  localStorage.setItem('productID', productID);

  // testFunction();




  // db.collection(productType).get().then((snapshot) => {
  //   console.log("this works")
  //   console.log('11', snapshot.docs)
  // })
}

let hatsCat = document.getElementById("productContainer");

 hatsCat.addEventListener("click", (e) => {
  //  console.log(e.target.parentElement);
    // console.log(e.target.parentElement.classList[1]);
   let productID = e.target.parentElement.children[4].innerHTML;
   let productType = e.target.parentElement.classList[1];
  // let idTag = document.querySelector(".idTag").innerHTML;
  //  let iconClass = document.getElementsByClassName("icon").contains("icon");
// console.log(idTag);

  // if(idTag){
  //   console.log("this is true");
  // }

   if(productID !== undefined){
     productInfo(productID, productType)
   }
 });

// function ClickCard(){
//   let cardID = document.getElementsByClassName("card");
//   // let cardID2 = document.getElementsByClassName("card")[1].children[4].innerHTML;
//   console.log(cardID, cardID2);

//   for(let i of cardID){

//   }
// }

const hatClass = document.getElementsByClassName("hats");
const topsClass = document.getElementsByClassName("tops");
const pantsClass = document.getElementsByClassName("pants");
const shoesClass = document.getElementsByClassName("shoes");


let clicks = 0;
let nuclearButton = document.getElementsByClassName("ButtonCart");

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

function onClick() {
  clicks += 1;
  const nuclearEmpty = document.getElementById("pp-contentCounter");

  nuclearEmpty.classList.add("productHidden");
  document.getElementById("basketNumber").innerHTML =`<h1>${clicks}</h1>`;
  // document.getElementById("pp-contentCounter").innerHTML =`Total items in basket: ${clicks}`;

  // console.log();
  // db.collection("hats").get().then((snapshot) => {
  //   snapshot.docs.forEach(doc => {
  //     productBasket(doc.data(),doc.id)
  //   });
  // });
};

const searchCategories = ["hats","tops","pants","shoes"];

const productBasket = (product, doc) => {
  let html = `
  <div id="PBContainer" class="PBContainer">
  <div class="PBbox">
  <p class="PBX"><i class="fa-solid fa-trash"></i></p> 
  <p class="PBitems">${product.name}</p>  <p class="PBprice">[£${product.price}]</p>
  </div>
  </div>
  `
  document.getElementById("pp-product").innerHTML += html;
}


// const searchTxt = document.getElementById("searchTxt").value
// list.innerHTML = ""

const PBList = document.getElementById("popup-center");

PBList.addEventListener("click", e => {
  if(e.target.parentElement.parentElement.classList.contains("PBbox")){
    clicks--;
    document.getElementById("basketNumber").innerHTML =`<h1>${clicks}</h1>`;
    e.target.parentElement.parentElement.classList.add("productHidden");

  }
});

// function delPB(){
//   const PBContainer = document.getElementsByClassName("PBContainer");

//   console.log(PBContainer);
//   PBContainer.classList.add("productHidden");
// };





if(hatClass !== undefined && hatClass !== null) {

  const addProduct = (product, doc) => {
    let html = `
    <div class="card ${product.type}" onclick="ClickCard()" id="cardID">
    <img src="../IMG/${product.image}" class="productIMG" alt="Item Picture" style="width:100%">
    <h1 class="item-title">${product.name}</h1>
    <p class="price">£${product.price}</p>
    <p class="item-desc">${product.item_desc}</p>
    <p class=idTag>${doc}</p>
    <p><button onclick="onClick();" id="buttonCart" class="ButtonCart">Add to Basket</button></p>
  </div> 
    `
    hatsCat.innerHTML += html;

// buttonCart.innerHTML = `Added to basket`;


  }
  // function CartUpdate(){

  
  //   // for(let i of buttonCart){
      
  //   // }
  // }

  // let buttonCart = document.getElementsByClassName("ButtonCart");


  // addEventListener("click", e => {
  //   if (e.target.classList.contains("ButtonCart")) {
  //     console.log(e.target);
  //     e.target.textContent = "ADDED";
  //     e.target.disabled = true;
  
  //   }
  // });

db.collection("hats").get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    addProduct(doc.data(),doc.id)
  });
});

db.collection("tops").get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    addProduct(doc.data(),doc.id)
    // console.log(doc.id)
  });
});

db.collection("pants").get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    addProduct(doc.data(),doc.id)
    // console.log(doc.id)
  });
});

db.collection("shoes").get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    addProduct(doc.data(),doc.id)
    // console.log(doc.id)
  });
});

}

//
addEventListener('click', (e) => {
    // console.log(e.target.parentElement.firstElementChild);
    if (e.target.classList.contains("test23")) {
      e.target.classList.toggle("fcACTIVE");
        // e.target.parentElement.firstElementChild.classList.toggle("fcACTIVE");
        // e.target.parentElement.lastElementChild.classList.toggle("fcACTIVE");
    }
    // console.log(document.getElementsByClassName("HATS"));
    // console.log(document.getElementsByClassName(`${e.target.innerText}`));
    // console.log(e.target.innerText);
    if(e.target.innerText === "HATS") {
      for(let i = 0; i < hatClass.length; i++){
        hatClass[i].classList.toggle("productHidden");
      }
      // hatClass.forEach(addClass => {
      //   addClass.add("hatHidden");
      // })


       //console.log(hatsCat);
      
        // db.collection("hats").get().then((snapshot) => {
        //   //  console.log(snapshot.docs[0].data())
        // });
    }

    if(e.target.innerText === "TOPS"){
      for(let i = 0; i < topsClass.length; i++){
        topsClass[i].classList.toggle("productHidden");
      }
    };

    if(e.target.innerText === "PANTS"){
      for(let i = 0; i < pantsClass.length; i++){
        pantsClass[i].classList.toggle("productHidden");
      }
    };

    if(e.target.innerText === "SHOES"){
      for(let i = 0; i < shoesClass.length; i++){
        shoesClass[i].classList.toggle("productHidden");
      }
    };

    


});




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

    console.log("this is clicked", i.textContent.toLowerCase());
    chosenElement = i.textContent.toLowerCase();
  })

function getProduct(){
  // console.log("wee")
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
      if(doc.data().name === chosenElement){
        // console.log(doc.id);
        console.log(`this is ${chosenElement}`);
         docID = doc.id;
    }



});
// console.log(docID);
banan(docID);

  })}};

  function banan (docID) {
    console.log(docID)

  }

  //* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
} 

