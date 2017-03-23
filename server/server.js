const express = require('express'); // framework express
const logger = require('morgan'); // logger en console
const path = require('path'); // pour manipuler les path

/* quelques exemples de middleware

 var favicon = require('serve-favicon');
 var cookieParser = require('cookie-parser');
 var bodyParser = require('body-parser');
 var cors = require('cors');
 */

/* middlewares de routing */
var homeRouting = require('./routes/home.js');
var pageRouting = require('./routes/pages.js');
var livreRouting = require('./routes/livres.js');

// démarrage
const app= express();

/* App.use([path], callback, [callback])
 Associe le middleware 'callback' à un path (par défaut : tous)
 Lorsque la base du path demandé correspond à path, on déclenche le callback
 */

// configuration du path vers les views
app.set('views', path.join(__dirname, '/views'));

// logger
app.use(logger('dev'));

// routage accueil
app.use('/', homeRouting);

// Routage vers pages
app.use('/page', pageRouting);

// routage vers les livres
app.use('/livres', livreRouting);

// routage 404
app.use((req,res,next) => {
    res.status(404);
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.write('Non trouvée');
    res.end();
});

// routage d'erreur
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.write('C\'est une erreur : '+err.message);
    res.end();
});

module.exports = app;