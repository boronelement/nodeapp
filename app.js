const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World changed code live at 11:05am. The current time is ' + new Date(Date.now()));
});

server.listen(3000);
console.log(`Server running at 3000`);

