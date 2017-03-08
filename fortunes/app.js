var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.render('home');
    // res.type('text/plain');
    // res.send('Fortunes R Us');
});

app.get('/about', function(req, res) {
    res.render('about');
    // res.type('text/plain');
    // res.send('All About Fortunes');
});

app.listen(app.get('port'), function() {
   console.log('Express started!');
});

var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];