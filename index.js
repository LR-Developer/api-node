let express = require('express');
let apiRoutes = require('./api-routes');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub')

var db = mongoose.connection;

var port = process.env.port || 8080;

app.use('/api', apiRoutes);

app.get('/', (req,res) => res.send("Hello World Express"));

app.listen(port, function(){
    console.log('Resthub Running on port ' + port);
});
