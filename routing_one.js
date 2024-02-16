// EXPRESS FRAMEWORK

// Routing and HTML

const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h1> Routing and HTML using express framework</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}......`);
});
