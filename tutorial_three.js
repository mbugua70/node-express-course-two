// Middleware
// code which runs (on the server) btn getting the request and sending response
// middleware run from top to bottom
// they stop to exercute once response is being send or been send to the next stage

// uses of middleware
// logger middleware log details of every request
// Authentication check middleware for protected routes
// middleware to parse JSON data from request
// return 404 pages

// view engines / Template engines

// allow us to write dynimic websites but also inject data to our websites
// examples of plugins to use for template in express
//    --- handlebars
//    --- pug
//    --- EJS

const express = require("express");
const app = express();

// connect to database(mongodb)
const dbURL =
  "mongodb+srv://myAtlasDBUser:123455@myatlasclusteredu.kmyoknr.mongodb.net/?retryWrites=true&w=majority";

// The below code is used to configure the view engine with ejs
app.set("view engine", "ejs");

// static files using middleware

app.use(express.static("public"));

// Below code shows how we can configure ejs using different directory.
// app.set("views", "public");

// sending html files

// the use of middleware
app.use((req, res, next) => {
  console.log(req.hostname);
  console.log(req.path);
  console.log(req.method);
  next();
});

app.get("/", (req, res) => {
  //   res.sendFile("./public/index.html", { root: __dirname });

  // rendering file using ejs

  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Ex ad esse ut ullamco ad voluptate laborum eiusmod",
    },
    {
      title: "Ex enim sit velit",
      snippet: "Id esse laborum aliqua deserunt dolore.",
    },
    {
      title: "Do ad qui ad laboris",
      snippet: "Enim aute voluptate qui dolore amet.",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  //   res.sendFile("./public/about.html", { root: __dirname });
  // rendering about file using ejs
  res.render("about", { title: "About" });
});

// redirecting in express

app.get("/blogs/create", (req, res) => {
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

// NOTES:
// 3rd Party Middleware
// example is morgan libraly

// static files using middleware
// e.g css files
