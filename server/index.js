var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../client/dist')));

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
