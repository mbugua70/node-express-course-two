// view engines / Template engines

// allow us to write dynimic websites but also inject data to our websites
// examples of plugins to use for template in express
//    --- handlebars
//    --- pug
//    --- EJS

const express = require("express");
const app = express();

// The below code is used to configure the view engine with ejs
app.set("view engine", "ejs");

// Below code shows how we can configure ejs using different directory.
// app.set("views", "public");

// sending html files

app.get("/", (req, res) => {
  //   res.sendFile("./public/index.html", { root: __dirname });

  // rendering file using ejs

  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  //   res.sendFile("./public/about.html", { root: __dirname });
  // rendering about file using ejs
  res.render("about", { title: "About" });
});

// redirecting in express

app.get("/blog/create", (req, res) => {
  res.render("create", { title: "Blog" });
});

// app.get("*", (req, res) => {
//   res.sendFile("./public/404.html", { root: __dirname });
// });

// another  to write the code above
app.use((req, res) => {
  //   res.status(404).sendFile("./public/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening to port ${port}.....`);
});
