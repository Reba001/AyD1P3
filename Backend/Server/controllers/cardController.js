var cardService = require('../services/cards');
 
/**
 * Gets all the users and list them all in screen.
 */
exports.listCards = function(req, res) {
    // Use the method loadCards form cardService to get all the cards
    cardService.loadCards(function(cards, err) {
        if (err) {
            console.error('Error al recuperar las tarjetas');
            res.render('error', {
                message: 'Se ha producido un error. Contacte con el administrador.',
                error: null
            });
        } else {
            console.log('Tarjetas recuperadas:', cards);
            res.json({cards: cards});
        }
    });
};