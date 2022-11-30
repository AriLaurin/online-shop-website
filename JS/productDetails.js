let foundProduct = false;
const descBox = document.getElementById("pdDesc");
const pdImage = document.getElementById("pdImage");
window.onload = testFunction();

let divTest = document.getElementById("idtest");

function testFunction() {
  let productType = localStorage.getItem("productType");
  let productID = localStorage.getItem("productID");
  console.log("Product Type: ", productType);
//   console.log("Product ID: ", productID);
//   console.log("what is happening");


  db.collection(productType)
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (!foundProduct) { //
          console.log("Product ID: ",doc.id);
          console.log("Specific product: ",doc.data().name);
          if (doc.id === productID) {
           let html =  descBox.innerHTML +=
            `
            <p id="pdTitle">${doc.data().name} </p>
            <hr>
            <p id="pdPrice">£${doc.data().price}</p>
            <p id="pdItemDesc">${doc.data().item_desc}</p>
            <p id="pdButton"><button onclick="onClick();" id="buttonCart" class="ButtonCart">Add to Basket</button></p>
          `
            // console.log("when is weekend");
            divTest += html;

            let htmlImage = pdImage.innerHTML += 
            `
            <img src="../IMG/${doc.data().image}" class="productIMG" alt="Item Picture" style="width:75%">
            `
            
            foundProduct = true;
          }
        }
      });
    });
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
let clicks = 0;

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



