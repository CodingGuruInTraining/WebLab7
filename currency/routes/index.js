var express = require('express');
var router = express.Router();

var exchangeRates = { 'EUR' : 0.94, 'JPY' : 112.86, 'EP' : 0.063 };

router.get('/', function(req, res){
    res.render('index');
});

router.get('/convert', function(req, res){
    var input = req.query.dollar_amount;
    var convertTo = req.query.to_currency;
    var convertFrom = req.query.from_currency;

    var rateToDollar = exchangeRates[convertTo];
    var rateFromDollar = exchangeRates[convertFrom];

    var result = input / ((1/convertTo) * (1/convertFrom));

    // var result = input * rateToDollar;
    //
    // if (rateToDollar < rateFromDollar) {
    //     result = result * rateFromDollar;
    // }
    // else {
    //     result = result / rateFromDollar;
    // }


    res.render('results', { input : input, result: result, currencyTo: convertTo, currencyFrom: convertFrom})
});

module.exports = router;