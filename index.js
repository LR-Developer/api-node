let express = require('express');
let apiRoutes = require('./api-routes');
let app = express();

var port = process.env.port || 8080;

app.use('/api', apiRoutes);

app.get('/', (req,res) => res.send("Hello World Express"));

app.listen(port, function(){
    console.log('Resthub Running on port ' + port);
});
