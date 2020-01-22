const express = require("express");
const { projects } = require("./data.json");
const app = express();
app.set("view engine","pug");
app.use(express.static("public"));






app.get("/",(req,res,next)=>{

    res.render("index",{ projects });
});
app.get("/about",(req,res)=>{

    res.send("hello, World!!!");
});

const server = app.listen(3000,()=>{
    console.log("running ...and listening on port 3000....");
});