var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.bodyParser());

app.get("/", function(request, response) {
	response.sendfile(__dirname + "/index.html");
});

app.get("/*", function(request, response) {
	var file = request.url.split('?')[0];
	response.sendfile(__dirname + file);
});

app.post("/save", function(request, response) {
	var data = request.body;
	var fileName = __dirname + data.file;

	fs.writeFile(fileName, data.content, function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log("Saved File: ", fileName);
		}
	});

	response.send("");
});

app.listen(3000);

