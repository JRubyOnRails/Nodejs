jscomplete.com  -   Samer Buna (node.js instructor) website
npmjs.com       -   Javascript packages

Install node version manager (nvm)
nvm install node    // This will install latest version of node
npm install Express // To install the express framework

You can
node -p "os.cpus().length"
node -p "Math.random()"

Best to start with npm init
-   The wizard asks some questions and creates package.json
-   Later, when you do npm install <module>, it documents the dependency
     in the package.json file

If you do, npm install, with no parameters it reads the package.json
 and downloads all required dependencies

 Javascript Frameworks:
    -   KOA     (Modern/better(?))
    -   Sails   (Mimics Ruby/rails)
    -   Express (older but more popular)