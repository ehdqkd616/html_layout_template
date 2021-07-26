var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/codeup_layout', function (req, res, next) {
    res.render('codeup_layout', {
        title: 'CodeUp_Layout'
    });
});

module.exports = router;