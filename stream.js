// STREAMS
// start using data, before it has finished loading
//  Buffer - small chunk of data.
const fs = require("fs");

// creating a stream

const readStream = fs.createReadStream("./doc/blog.txt");
// instead of usign toString() we can use the second arguement in the code above , {encoding: utf8}
readStream.on("data", (chunk) => {
  console.log("--------- NEW CHUNK ---------");
  console.log(chunk.toString());
});
