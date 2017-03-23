// modéle livre
const livres = require('../models/livres');

// object controller livres
function livresCtrl(){}

// controller de l'index
livresCtrl.prototype.index = function(req, res, next){
    res.render('accueilLivre.ejs');
};

// controller pour obtenir la liste des livres
livresCtrl.prototype.liste = function(req, res, next){
    res.json({type:'information sur les livres', data:['livre1', 'livre1']});
};

// controller pour obtenir les infos d'un livre
livresCtrl.prototype.infos = function(req, res, next){
    res.json( livres.get());
};

module.exports = new livresCtrl();