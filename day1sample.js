const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    const number = parseInt(prompt("Enter an integer: "));
for (let i = 1; i <= 10; i++) {
  // multiply i with number
  const result = i * number;
  console.log(`${number} * ${i} = ${result}`);
}
});

server.listen(port,() => {
    console.log(`Server running at port `+port);
});
