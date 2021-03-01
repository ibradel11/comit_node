const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello Adil');
})

server.listen(3000,() => {
        console.log("running server on port 3000");
    });

