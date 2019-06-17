const http = require('http');
const fs = require('fs');

fs.readFile('index.html', (err,html) => {
    if (err) {
        throw err;
    }

// console.log(process.pid);
console.log('Server starting on port: ' + process.env.PORT);
// console.log(http);
// console.dir(http, {depth: 0});

const listener = (req, res) => {
    // read from req = URL, OS, Body
    res.statusCode = 200;       // Optional
    // res.setHeader('Content-type', 'text/plain');   
    res.setHeader('Content-type', 'html');
    res.write(html);
    res.end();                  // String parameter is optional
};

const server = http.createServer(listener);
server.listen(process.env.PORT);

/*
server.listen(process.argv[2]);
*/

/*
process.exit();
*/
});