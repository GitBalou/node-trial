/*
 routage : router.METHOD(path, handler)
 path, correspond au noeud final de l'URI
 */

var express = require('express');
var router = express.Router();


// Accueil pour méthode GET en plein text
router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Charset', 'utf-8');
    res.write('Texte d\'accueil en plain text');
    res.end();
});

module.exports = router;
