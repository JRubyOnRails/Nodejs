/*
When you 'require' it looks for internal modules
 or  it looks for the full path specified as string
 or  it looks under node_modules folder

 The argument can be a folder, and in this case it looks
  for a index.js in that folder and execute it

When you do npm install <module> it places it in the node_modules
 directory

*/
require('./script_called.js')();   // This is sync process
console.log('Hello node');

/*
This prints the entire environment...hence commented out
console.log(process);
*/
process.stdout.write (
    'Hello to you also\n'
);
