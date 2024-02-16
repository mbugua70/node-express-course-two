// const people = require("./data");

// console.log(people);

// NODEJS BASICS

// localhost is like domain name in a web.// loop back ip address

// port number are like doors inot a computers/ software or server communicate to

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log("Home page working");
    res.setHeader("content-type", "text/html");
    // res.write("<h1>Creating web page using the node basics</h1>");
    // res.write("<h1>Backing a backend developer</h1>");
    // res.end();

    // read the file

    fs.readFile("./public/index.html", (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.write(data);
        res.end();

        // NB:: You can mostly res.write to send multiple docs
        // but also another way of sending data could res.end(data)
      }
    });
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
