import express from "express";
import bodyParser from 'body-parser';

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandname ="";

const app = express();
const port = 4400;


app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req,res,next){
  console.log(req.body);
  bandname=(req.body["street"]+req.body["pet"] );
  next();
}
app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req,res)=>{
  res.send(`<h1>YOUR BAND NAME IS: </h1><h2>${bandname}✌️</h2>`);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
