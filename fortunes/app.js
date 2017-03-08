var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.type('text/plain');
    res.send('Fortunes R Us');
});

app.get('/about', function(req, res) {
    res.type('text/plain');
    res.send('All About Fortunes');
});

app.listen(app.get('port'), function() {
   console.log('Express started!');
});