// const people = require("./data");

// console.log(people);

// NODEJS BASICS

// localhost is like domain name in a web.// loop back ip address

// port number are like doors inot a computers/ software or server communicate to

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log("Home page working");
    res.setHeader("content-type", "text/html");
    res.write("<h1>Creating web page using the node basics</h1>");
    res.write("<h1>Backing a backend developer</h1>");
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
