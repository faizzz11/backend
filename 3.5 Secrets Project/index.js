import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port=4700;

var userIsAuthorised=false;

app.use(bodyParser.urlencoded({extended:true}));

function PasswordChecker(req,res,next){
 const password = req.body["password"];
 if(password==="ILoveWWE"){
    userIsAuthorised= true;
 }
next();
}
app.use(PasswordChecker);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  app.post("/check", (req,res)=>{
    if(userIsAuthorised){
    res.sendFile(__dirname + "/public/secret.html");
} else {
    res.send("<h1>chal teri maa ki choot lvde✌️</h1>");
}
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});