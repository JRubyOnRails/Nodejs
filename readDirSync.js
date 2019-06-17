fs = require('fs');

data = fs.readdirSync('/usr');
console.log('data:', data);

console.log("this comes after");