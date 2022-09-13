const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
for (let i = 1; i <= 10; i++) {
  const result = i * 10;
  console.log(`10 * ${i} = ${result}`);}
});

server.listen(port,() => {
    console.log(`Server running at port `+port);
});
