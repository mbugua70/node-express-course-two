// blog_index, blog_create, blog_delete, blog_post, blog_single

const Blog = require("../models/blog");

const blog_index = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.render("index", { title: "All Blogs", blogs });
  } catch (err) {}
};

const blog_create = (req, res) => {
  res.render("create", { title: "Create a new blog" });
};

const blog_post = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    const result = await blog.save();
    res.redirect("/blogs");
  } catch (err) {
    console.log(err);
  }
};

const blog_single = async (req, res) => {
  try {
    const paramsID = req.params.id;
    const result = await Blog.findById(paramsID);
    res.render("details", { blog: result, title: "" });
  } catch (err) {
    console.log(err);
  }
};

const blog_delete = async (req, res) => {
  const paramsID = req.params.id;
  try {
    const result = await Blog.findByIdAndDelete(paramsID);
    // console.log(result)
    res.status(200).json({ redirect: "/blogs" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  blog_index,
  blog_create,
  blog_delete,
  blog_post,
  blog_single,
  blog_single,
};
