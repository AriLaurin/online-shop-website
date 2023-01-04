const express = require("express"); //Import the express dependecy
const app = express(); //Initiate an express app
const port = 5002; //Save the port
var SHA256 = require("crypto-js/sha256");


//middleware
app.use(express.static("public")); //anything inside the folder, is available as a static file to the front end
app.use(express.urlencoded({extended: true})); //takes all the data in our form and parses it into an object

app.get("/index.html", (req,res) => { //get request to the root
   res.sendFile("index.html", {root:__dirname});  
});

app.get("/HTML/products.html", (req,res) => { //get request to the root
    res.sendFile("/HTML/products.html", {root:__dirname});  
 });

 app.get("/HTML/productPage.html", (req,res) => { //get request to the root
    res.sendFile("/HTML/productPage.html", {root:__dirname});  
 });

 app.get("/HTML/login.html", (req,res) => { //get request to the root
    res.sendFile("/HTML/login.html", {root:__dirname});  
 });

 app.get("/HTML/newaccount.html", (req,res) => { //get request to the root
    res.sendFile("/HTML/newaccount.html", {root:__dirname});  
 });

 app.get("/HTML/account.html", (req,res) => { //get request to the root
    res.sendFile("/HTML/account.html", {root:__dirname});  
 });

 app.post("/userCredentials", (req,res) => { //get request to the root
   res.send("i'm asd :(");
   console.log(req);
});

app.get("/HTML/adminpanel.html", (req,res) => { //get request to the root
   res.sendFile("/HTML/adminpanel.html", {root:__dirname});  
});

app.get("/HTML/FAQ.html", (req,res) => { //get request to the root
   res.sendFile("/HTML/FAQ.html", {root:__dirname});  
});


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});