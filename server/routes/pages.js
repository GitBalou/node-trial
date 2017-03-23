/*
 routage : router.METHOD(path, handler)
 path, correspond au noeud final de l'URI
 */

var express = require('express');
var router = express.Router();


// Accueil des pages
router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.write('Vous êtes au début des pages');
    res.end();
});

// Affichage d'une page
router.get('/:number', (req, res, next) => {

    const number = parseInt(req.params.number);

    if (isNaN(number)) {
        var err = new Error('Mauvais paramètre');
        err.status = 400;
        next(err);
    }
    else {
        res.render('page.ejs', {number: number});
    }
});

module.exports = router;