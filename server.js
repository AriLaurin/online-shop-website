const express = require("express"); //Import the express dependecy
const app = express(); //Initiate an express app
const port = 5002; //Save the port

app.get("/", (req,res) => { //get request to the root
   res.sendFile("index.html", {root:__dirname});  //
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});