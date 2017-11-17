var express = require('express');
var app = express();

app.use('/public',express.static(__dirname+'/src/client/public'));

app.get('/',function(req,res){
  res.sendFile(__dirname+'/src/client/index.html');
});

app.get('/gallery',function(req,res){
  res.sendFile(__dirname+'/src/client/index.html');
});

app.get('/about',function(req,res){
  res.sendFile(__dirname+'/src/client/index.html');
});

app.get('/contact',function(req,res){
  res.sendFile(__dirname+'/src/client/index.html');
});

app.get('/login',function(req,res){
  res.sendFile(__dirname+'/src/client/login.html');
});


app.listen(3000);
