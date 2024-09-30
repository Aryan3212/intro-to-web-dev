// import { http } from 'node:http'; <- Different import syntax.
// const { createReadStream } = require('node:fs');
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('POST method works!');
    res.end();
  } else if (req.method === 'GET') {
    //  && req.url.endsWith === 'about'
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('GET method works!');
    // const aboutFile = createReadStream('about.html');
    // aboutFile.pipe(res);
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const response = await fetch('http://127.0.0.1:3000/', { method: 'POST' })
// await response.text()