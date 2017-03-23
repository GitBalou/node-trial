function Livre(){};

Livre.prototype.get = function(req, res, next){
  return {'titre': 'titre livre', 'nbr pages':144};
};

module.exports = new Livre();