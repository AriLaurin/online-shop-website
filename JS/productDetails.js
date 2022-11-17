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
            <p id="pdButton"><button>Add to Basket</button></p>
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
