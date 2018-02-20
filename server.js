var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'shinto', 'dist')));

app.all('*', (req, res, next)=> {
    res.sendFile(path.resolve('./shinto/dist/index.html'));
})

app.listen(8000, function(){
    console.log('listening on port 8000');
})