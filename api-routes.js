let router = require('express').Router();

router.get('/', function(req, res) {
    res.json({
        status: 'API working',
        message: 'Welcome to RestHub!'
    });
});

module.exports = router;
