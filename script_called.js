/*
Specifying module.exports converts this file into a function
When you 'require' this file, the function is executed synchronously
*/
let a = 1;
module.exports.a = a;
module.exports = () => {
    console.log('This is script_called.js');
};