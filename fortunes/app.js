var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

// Route to home page.
app.get('/', function(req, res) {
    res.render('home');
});

// Route to about page.
app.get('/about', function(req, res) {
    res.render('about');
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    console.log(randomFortune);
    // Sets what goes in the 'fortune' placeholder.
    res.render('about', { fortune: randomFortune });
});

app.listen(app.get('port'), function() {
   console.log('Express started!');
});

// Creates static array.
var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];