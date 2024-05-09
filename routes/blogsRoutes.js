const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogControllers");

router.get("/", blogController.blog_index);

router.get("/create", blogController.blog_create);

// post request

router.post("/", blogController.blog_post);

// blog details
// single blog

router.get("/:id", blogController.blog_single);

router.delete("/:id", blogController.blog_delete);

module.exports = router;
