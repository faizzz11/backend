import express from "express"
const app= express();
const port=2500;

app.get ("/", (req,res)=> {
    res.send("<h1>this server is created by faiz moulavi!!</h1>");
});
app.get("/faiz", (req,res)=> {
    res.send("<h1>about me!!!</h1>");
});

app.get("/contact", (req,res)=> {
    res.send("<h2>9136261589</h2>");
});

app.listen(port, ()=> {
    console.log(`server running at port ${port}.`);
})