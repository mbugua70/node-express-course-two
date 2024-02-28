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
const mongoose = require("mongoose");
const Blog = require("./models/blog");
require("dotenv").config();

const app = express();

// connect to database(mongodb)
const MONGODB_URL_STRING = process.env.MONGODB_URL_STRING;

// The below code is used to configure the view engine with ejs
app.set("view engine", "ejs");

// static files using middleware

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// connecting to the database.
mongoose
  .connect(MONGODB_URL_STRING)
  .then((result) => {
    // the below code will allow only to listen for request only when its connected to the database.
    const port = process.env.PORT || 5000;

    app.listen(port, () => {
      console.log(`Listening to port ${port}.....`);
    });
  })
  .catch((err) => {
    console.log(`Ooops couldn't connect to the database due to Error: ${err}`);
  });

// Below code shows how we can configure ejs using different directory.
// app.set("views", "public");

// sending html files

// the use of middleware
app.use((req, res, next) => {
  console.log(req.hostname);
  console.log(req.path);
  console.log(req.method);
  res.locals.path = req.path;
  next();
});

app.get("/", async (req, res) => {
  //   res.sendFile("./public/index.html", { root: __dirname });

  // rendering file using ejs

  // const blogs = [
  //   {
  //     title: "Yoshi finds eggs",
  //     snippet: "Ex ad esse ut ullamco ad voluptate laborum eiusmod",
  //   },
  //   {
  //     title: "Ex enim sit velit",
  //     snippet: "Id esse laborum aliqua deserunt dolore.",
  //   },
  //   {
  //     title: "Do ad qui ad laboris",
  //     snippet: "Enim aute voluptate qui dolore amet.",
  //   },
  // ];

  // try {
  //   const blogs = await Blog.find({});
  //   return res.render("index", { title: "Home", blogs });
  // } catch (err) {}

  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  //   res.sendFile("./public/about.html", { root: __dirname });
  // rendering about file using ejs
  res.render("about", { title: "About" });
});

// redirecting in express
// blogs
// blog routes
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});


app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.render("index", { title: "All Blogs", blogs });
  } catch (err) {}
});


// post request

app.post('/blogs',async (req,res) => {
  // console.log(req.body);

  try{
    const blog = new Blog(req.body);
    const result = await blog.save()
  res.redirect('/blogs')
  }catch(err){
    console.log(err)
  }
})


// blog details
// single blog

app.get('/blogs/:id', async (req, res) => {
  try{
    const paramsID = req.params.id;
    const result = await Blog.findById(paramsID)
    res.render('details', {blog: result, title: ""})
  }catch(err){
    console.log(err)
  }
})

app.delete('/blogs/:id', async (req, res) => {
  const paramsID = req.params.id;
  try{
    const result = await Blog.findByIdAndDelete(paramsID);
    // console.log(result)
    res.status(200).json({redirect: '/blogs'})
  }catch(err){
    console.log(err);
  }
})


//sample of mongoose and mongoDB data post

// app.get("/add-blog", async (req, res) => {
//   const blog = new Blog({
//     title: " new Blog 3",
//     snippet: " about the new blog",
//     body: "Sint velit aliquip mollit et aliqua eiusmod reprehenderit commodo nostrud tempor.",
//   });

//   try {
//     const result = await blog.save();
//     return res.status(200).json({ success: true, data: result });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ success: false, msg: `Ooops an Error occurred, Error: ${err}` });
//   }
// });

// getting all blogs

// app.get("/all-blogs", async (req, res) => {
//   try {
//     const allBlogs = await Blog.find({});
//     return res.status(200).json({ success: true, data: allBlogs });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ success: false, msg: `An Error occured, Error: ${err}` });
//   }
// });

// app.get("/single-blog/:id", async (req, res) => {
//   try {
//     const paramsId = req.params.id;
//     const singleBlog = await Blog.findOne({ _id: paramsId });
//     return res.status(200).json({ success: true, data: singleBlog });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ success: false, msg: `An Error Occurred, Error: ${err}` });
//   }
// });

// app.get("*", (req, res) => {
//   res.sendFile("./public/404.html", { root: __dirname });
// });

// another  to write the code above
app.use((req, res) => {
  //   res.status(404).sendFile("./public/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});



// NOTES:
// 3rd Party Middleware
// example is morgan libraly

// static files using middleware
// e.g css files
