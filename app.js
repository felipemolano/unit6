
const express = require("express");
const { projects } = require("./data.json");
const app = express();
app.set("view engine","pug");
app.use("/static", express.static("public"));





//////////// index route
app.get("/",(req,res,next)=>{

    res.render("index",{ projects });
});

//////////// about route
app.get("/about",(req,res)=>{

    res.render("about");
});



//////////// projects route
app.get('/projects/:id', function(req, res, next) {
    const pId = req.params.id;
    console.log(pId);
    const project = projects.find( ({ id }) => id === +pId );
    if (project) {
      
      res.render('project', {project});
    } else {
      res.sendStatus(404);
    }
  });


//////////// error handling
app.use((req,res,next)=>{
    const err = new Error("Not found !! ");
    err.status = 404;
    next(err);
});


app.use((err,req,res,next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render("error");

});





const server = app.listen(3000,()=>{
    console.log("running ...and listening on port 3000....");
});