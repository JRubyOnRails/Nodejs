var fs = require('fs')

fs.readFile('./data.json', 'utf-8', (err,data) => {
	var jsondata = JSON.parse(data)
	console.log(jsondata.color)
})

var data = require('./data.json')
console.log(data.color)

fs.readdir('/home/minty/Documents/node', (err,data) => {
	console.log(data)
})

var data = {
	name: 'Bob'
}
fs.writeFile('./odata.json', JSON.stringify(data), (err) => {
	console.log('Write finished', err)
})