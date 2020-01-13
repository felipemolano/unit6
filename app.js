const express = require("express");
const data = require("./data.json");
const app = express();
app.set("view engine","pug");







app.get("/",(req,res)=>{

    res.send("hello, World!!!");
});
app.get("/about",(req,res)=>{

    res.send("hello, World!!!");
});

const server = app.listen(3000,()=>{
    console.log("running ...and listening on port 3000...."+data.projects[1].project_name);
});