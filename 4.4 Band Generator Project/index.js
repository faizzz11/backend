import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";
const app = express();
const port = 7000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res,render("index.ejs");
});

app.post("/submit", (req, res) => {
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});