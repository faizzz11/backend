import express from "express";
const app=express();
const port=6100;

app.get("/", (req,res)=>{
  res.render("index1.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});