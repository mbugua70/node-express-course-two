//  creating the schema for models

const mongoose = require("mongoose");
// schema is used to describe the structure of the document.(properties and property);
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//  creating our model
// the first arguement its our model name, which mongoose will pluralize for use to match our collection name, second arguement its our schema name,
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
