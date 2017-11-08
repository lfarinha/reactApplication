var express = require('express');
var app = express();

app.use('/public',express.static(__dirname+'/src/client/public'));

app.get('/',function(req,res){
  res.sendFile(__dirname+'/src/client/index.html')
});

app.listen(3000);
