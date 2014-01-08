var enableSave = !process.env.PORT; // don't allow save API when deployed

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

function configureSave() {
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
}

if(enableSave) {
	configureSave();
}

app.listen(process.env.PORT || 3000);

