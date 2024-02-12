// FILE MODULES
const fs = require("fs");

fs.mkdir("./assets", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("folder created");
});

if (!fs.existsSync("./assets_two")) {
  fs.mkdir("./assets_two", (err) => {
    if (!err) {
      console.log("Directory created");
    }
    console.log("File not created.");
  });
}

// removing a directory we will use
// -- fs.rmdir(directory name)
