var express = require('express');
var router = express.Router();

// var exchangeRates = { 'EUR' : 0.94, 'JPY' : 112.86, 'EP' : 0.063 };
var exchangeRates = { 'EUR' : 0.9458, 'JPY' : 113.938, 'EP' : 17.4983 };

router.get('/', function(req, res){
    res.render('index');
});

router.get('/convert', function(req, res) {
    var input = req.query.dollar_amount;
    var convertTo = req.query.to_currency;
    var convertFrom = req.query.from_currency;

    var rateTo = exchangeRates[convertTo];
    var rateFrom = exchangeRates[convertFrom];

    var toDollars = input/rateFrom;         //  (input * rateFrom)/rateTo;
    console.log("dollars: " + toDollars);
    var fromDollars = toDollars * rateTo;

    var result = fromDollars;





    // var fromAmount = input * rateFromDollar;

    // if (rateFrom > 1) {
    //
    //     var dollarAmount = input / rateFrom;
    // // var toAmount = fromAmount * rateToDollar;
    // }
    // else {
    //     var dollarAmount = input * rateFrom;
    // }
    //
    //
    // // if (rateTo > 1) {
    //     var result = dollarAmount * rateTo;
    // // }

        // input / ((1/rateToDollar) * (1/rateFromDollar));

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