import express from "express";

const app = express();
const port = 4900;

app.get("/", (req, res) => {
  const today = new Date("June 24, 2023 11:13:00");
  // weekend:
  // new Date("June 24, 2023 11:13:00");
  // weekday:
  // new Date("June 20, 2023 11:13:00");
  const day = today.getDay();

  console.log(day);
  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "a weekend";
    adv = "it's time to enjoy";
  }
   
  res.render("index.ejs", {
     dayType: type, 
     advice: adv,
  });
});

 app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
  });
  