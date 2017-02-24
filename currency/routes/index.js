var express = require('express');
var router = express.Router();

var exchangeRates = { 'EUR' : 0.94, 'JPY' : 112.86 };

router.get('/', function(req, res){
    res.render('index');
});

router.get('/convert', function(req, res){
    var dollars = req.query.dollar_amount;
    var convertTo = req.query.to_currency;

    var rate = exchangeRates[convertTo];
    result = dollars * rate;

    res.render('results', { dollars : dollars, result: result, currency: convertTo})
});

module.exports = router;