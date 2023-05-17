const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World changed code live at 4:03am');
});

server.listen(3000);
console.log(`Server running at 3000`);

