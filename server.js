const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

//using ejs as viewEngine to begin with
app.set('view-engine', 'ejs');

//tell server where the views are coming from
app.set('views', `${__dirname}/views`);

//layout files will live here so that they dont have to be repeated
app.set('layout', 'layouts/layouts');


app.use(expressLayouts);

//js, stylesheets, images, etc
app.use(express.static('public'));


// either listen on deployed port or 3000
app.listen(process.env.PORT || 3000);
