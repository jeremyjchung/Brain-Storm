var express = require('express');

app = express();
app.get('/', function(req, res) {
    res.send('Welcome to the Brainstorm!!!');
});
app.listen(9000, function() {
  console.log('starting ...');
});
