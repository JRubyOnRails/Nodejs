var http = require('http');
var url =  'http://api.openweathermap.org/data/2.5/weather?q=Flower+Mound,US&APPID=4ad322e3116fc7e224b7ab2c22e7e8a8&units=imperial';

var server = http.createServer(function(request, response){
    var request = require('request');
    request(url, function(err, res, body) {
        var data = JSON.parse(body);
        console.log(data);
        response.write("<html><body><div id='container'>");
        response.write("<h1>" + 'City name   : ' + data['name'] + '<br>' + "</h1>");
        response.write("<h2>" + 'Temperature :   ' + data.main['temp'] + '<br>' + "</h2>");
        response.write("<h2>" + 'Sunset time :   ' + new Date(data.sys['sunset'] * 1000) + "</h2>");
        response.write("</div></body></html>");
        response.end();

    });
}).listen(8080);


