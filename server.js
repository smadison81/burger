const express = require("express");
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');


const app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({

    extended: false

}))

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js')
app.use('/', routes);
var port = 3000;
app.listen(port);