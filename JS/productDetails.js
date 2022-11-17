let foundProduct = false;
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
           let html =  document.body.innerHTML += `<div>${doc.data().name}</div>`
            // console.log("when is weekend");
            divTest += html;
            
            foundProduct = true;
          }
        }
      });
    });
}
