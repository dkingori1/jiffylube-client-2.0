'use strict';

var express = require('express');

var app = express();

var port = 3000;

app.use(express.static('app'));

app.get('/', function(req, res){
    res.send('i work');
});

app.listen(port, function(err){
    console.log('i work');
});