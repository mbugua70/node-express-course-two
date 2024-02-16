const express = require("express");
const app = express();

// sending html files

app.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./public/about.html", { root: __dirname });
});

// redirecting in express

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// app.get("*", (req, res) => {
//   res.sendFile("./public/404.html", { root: __dirname });
// });

// another  to write the code above
app.use((req, res) => {
  res.status(404).sendFile("./public/404.html", { root: __dirname });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening to port ${port}.....`);
});
