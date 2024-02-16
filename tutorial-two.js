// const people = require("./data");

// console.log(people);

// NODEJS BASICS

// localhost is like domain name in a web.// loop back ip address

// port number are like doors inot a computers/ software or server communicate to

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let path = "./public/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);

      // NB:: You can mostly res.write to send multiple docs
      // but also another way of sending data could res.end(data)
    }
  });
});

const port = 5000;

server.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
