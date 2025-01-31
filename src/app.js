const express = require("express");
const app = express();
const gadgetRoutes = require("./routes/gadgetRoutes");

app.use(express.json());  // Parse incoming JSON requests
app.use(gadgetRoutes);    // Use the gadget routes




app.get('/',(req,res)=>{
    res.send('IMF API is running ......');
});

module.exports=app;