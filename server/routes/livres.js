const express = require('express')
const router = express.Router();

// controller
const livresCtrl = require('../controllers/livres.js');

// Accueil pour les livres
router.get('/', livresCtrl.index);

// JSon pour les livres : depuis le controller
router.get('/liste', livresCtrl.liste);

// JSON pour un livre : depuis le modèle
router.get('/infos', livresCtrl.infos)

module.exports = router;