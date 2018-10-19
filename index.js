let express = require('express');
let app = express();

var port = process.env.port || 8080;

app.get('/', (req,res) => res.send("Hello World Express"));

app.listen(port, function(){
    console.log('Resthub Running on port ' + port);
});
